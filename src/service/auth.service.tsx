import axios from "axios";
import { toast } from "react-toastify";
import promisify from '../utils/promisfy.util'
import { getItemFromLS } from "../utils/LS_STORAGE";
import { getDispatch } from "../utils/dispatch.util";
import { logout } from "../store/auth/auth.slice";
// import { chefActions } from "@/redux/slices/auth.slice";

// axios.defaults.baseURL = "https://middleware.noshly.io/api/v1/";
// axios.defaults.baseURL = process.env.VITE_BASE_URL_GUEST;

axios.defaults.baseURL = "http://localhost:3000/api/v1/";

let previousErrorTimer;
let previousSuccessTimer;
let previousErrorMessage = "";
let previousSuccessMessage = "";

axios.interceptors.request.use(
  (config) => {
    const token = getItemFromLS("token");
    config.headers["Authorization"] = token;
    config.headers["Content-Type"] = `${
      config.headers["Content-Type"] || "application/json"
    }`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    let { error, success, message, token } = response?.data || {};

    if (success) {
      if (error) toast.error(error);
      if (token) localStorage.setItem("token", token);
    }

    if (message) {
      if (success) toast.success(message);
      else toast.error(message);
    }

    return response;
  },
  (error) => {
    const dispatch = getDispatch();
    let message = error?.message || "Something went wrong.";

    if (error?.response?.data?.success === true) message = "";
    else if (error?.response?.data?.success === false)
      message = error?.response?.data?.message;

    if (message) toast.error(message);

    if (error?.response?.status === 401) {
      localStorage.clear();
      dispatch(logout());
      window.location.href = "/sign-in";
      return;
    }
    return Promise.reject(error);
  }
);

const http = {
  get: (url = "", config = {}) => promisify(axios.get(url, config)),
  post: (url = "", data = {}, config = {}) =>
    promisify(axios.post(url, data, config)),
  put: (url = "", data = {}, config = {}) =>
    promisify(axios.put(url, data, config)),
  patch: (url = "", data = {}, config = {}) =>
    promisify(axios.patch(url, data, config)),
  delete: (url = "", config = {}) => promisify(axios.delete(url, config)),
};

export default http;