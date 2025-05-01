'use client'

import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState, useEffect, type SetStateAction } from 'react'
// import { toast } from 'react-toastify'
// import http from '../service/auth.service'
import http from '../../service/auth.service'

// signupSchema
export const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 6 characters')
    .required('Password is required'),
  phone: Yup.string()
    .matches(/^\+?[0-9]{7,15}$/, 'Enter a valid phone number')
    .required('Phone Number is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
})

// loginSchema
export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Mail').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSignUp, setIsSignUp] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 900)
      const handleResize = () => setIsMobile(window.innerWidth < 900)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])



// SIGN-UP USER API 
  const signupApi = async () => {
    try {
      const payload = {
        email,
        phone,
        firstName,
        lastName,
        password,
      }
      const response = await http.post('auth/sign-up', payload)
      console.log('Signup successful', response)
    } catch (error) {
      console.log(error)
    }
  }


// SIGN-IN USER API  
  const loginApi = async () => {
    try {
      const payload = {
        email,
        password,
      }
      const response = await http.post('auth/sign-in', payload)
      console.log('Login successful', response)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className='font-canela relative'>
      <div className='flex md:!flex-row xs:flex-col gap-5'>
        <p
          className='cursor-pointer'
          onClick={() => {
            setIsOpen(true)
            setIsSignUp(false)
            setEmail('')
            setPassword('')
          }}
        >
          Log In
        </p>
        <p
          className='cursor-pointer'
          onClick={() => {
            setIsOpen(true)
            setIsSignUp(true)
            setEmail('')
            setPassword('')
          }}
        >
          Sign Up
        </p>
      </div>

      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-[0.7] flex items-center justify-center backdrop-blur-md z-50'>
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden relative 
            ${
              isMobile
                ? 'w-full h-full flex flex-col'
                : 'w-[900px] h-[620px] flex'
            }`}
          >
            {!isMobile && (
              <div className='w-[400px]'>
                <img
                  src='/placeholder.svg?height=630&width=400'
                  alt='Login background'
                  className='h-[630px]'
                />
              </div>
            )}

            <div
              className={`p-6 ${
                isMobile
                  ? 'w-full h-full'
                  : 'w-[480px] pl-[70px] pr-[70px] pb-[8px] overflow-y-auto max-h-[550px] mt-9 scrollbar-hide'
              }`}
            >
              <button
                className='absolute top-4 right-4 text-xl'
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
              <div className='flex justify-center items-center text-[28px] font-normal mb-4'>
                <p
                  className={`${
                    isSignUp
                      ? 'border-b-2 border-black-100'
                      : 'border-b-4 border-[#f6e5d1]'
                  } px-5 cursor-pointer`}
                  onClick={() => {
                    setIsSignUp(false)
                    setEmail('')
                    setPassword('')
                    setPhone('')
                    setFirstName('')
                    setLastName('')
                  }}
                >
                  Log In
                </p>
                <p
                  className={`${
                    isSignUp
                      ? 'border-b-4 border-[#f6e5d1]'
                      : 'border-b-2 border-black-100'
                  } px-5 cursor-pointer`}
                  onClick={() => {
                    setIsSignUp(true)
                    // setEmail('')
                    // setPassword('')
                  }}
                >
                  Sign Up
                </p>
              </div>

              <p className='text-center text-sm text-gray-600 mb-4'>
                and get up to <span className='font-bold'>$300 USD OFF</span>{' '}
                your first purchase
              </p>
              <Formik
                initialValues={{
                  email: '',
                  phone: '',
                  password: '',
                  firstName: '',
                  lastName: '',
                }}
                enableReinitialize
                validationSchema={isSignUp ? signupSchema : loginSchema}
                onSubmit={() => {
                  if (isSignUp) {
                    signupApi()
                  } else {
                    loginApi()
                  }
                  setIsSignUp(false)
                }}
              >
                {({ handleChange, handleSubmit }) => (
                  <Form className='space-y-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col mb-[20px]'>
                      <label className='text-sm font-bold'>Email Address</label>
                      <Field
                        type='email'
                        className={`w-full border px-3 py-2 rounded mt-1 `}
                        placeholder='Enter email'
                        name='email'
                        value={email}
                        onChange={(e: {
                          target: { value: SetStateAction<string> }
                        }) => {
                          handleChange(e)
                          setEmail(e.target.value)
                        }}
                      />
                      <ErrorMessage
                        name='email'
                        component='div'
                        className='text-red-500 text-xs mt-1 mb-2'
                      />
                    </div>

                    {!isSignUp ? (
                      <div className='flex flex-col mb-[40px]'>
                        <label className='text-sm font-bold'>Password</label>
                        <Field
                          type='password'
                          className={`w-full border px-3 py-2 rounded mt-1 `}
                          name='password'
                          value={password}
                          placeholder='Enter password'
                          onChange={(e: {
                            target: { value: SetStateAction<string> }
                          }) => {
                            handleChange(e)
                            setPassword(e.target.value)
                          }}
                        />
                        <ErrorMessage
                          name='password'
                          component='div'
                          className='text-red-500 text-xs mt-1 mb-2'
                        />
                        <a
                          href='#'
                          className='text-xs text-black underline mt-2'
                        >
                          Forgot Password?
                        </a>
                      </div>
                    ) : (
                      <>
                        <div className='flex flex-col mb-[20px]'>
                          <label className='text-sm font-bold'>Phone</label>
                          <Field
                            type='text'
                            className={`w-full border px-3 py-2 rounded mt-1 `}
                            placeholder='Enter phone number'
                            name='phone'
                            value={phone}
                            onChange={(e: {
                              target: { value: SetStateAction<string> }
                            }) => {
                              handleChange(e)
                              setPhone(e.target.value)
                            }}
                          />
                          <ErrorMessage
                            name='phone'
                            component='div'
                            className='text-red-500 text-xs mt-1 mb-2'
                          />
                        </div>
                        <div className='flex flex-col mb-[20px]'>
                          <label className='text-sm font-bold'>
                            First Name
                          </label>
                          <Field
                            type='text'
                            className={`w-full border px-3 py-2 rounded mt-1 `}
                            placeholder='Enter first name'
                            name='firstName'
                            value={firstName}
                            onChange={(e: {
                              target: { value: SetStateAction<string> }
                            }) => {
                              handleChange(e)
                              setFirstName(e.target.value)
                            }}
                          />
                          <ErrorMessage
                            name='firstName'
                            component='div'
                            className='text-red-500 text-xs mt-1 mb-2'
                          />
                        </div>
                        <div className='flex flex-col mb-[20px]'>
                          <label className='text-sm font-bold'>Last Name</label>
                          <Field
                            type='text'
                            className={`w-full border px-3 py-2 rounded mt-1`}
                            placeholder='Enter last name'
                            name='lastName'
                            value={lastName}
                            onChange={(e: {
                              target: { value: SetStateAction<string> }
                            }) => {
                              handleChange(e)
                              setLastName(e.target.value)
                            }}
                          />
                          <ErrorMessage
                            name='lastName'
                            component='div'
                            className='text-red-500 text-xs mt-1 mb-2'
                          />
                        </div>
                        <div className='flex flex-col mb-[20px]'>
                          <label className='text-sm font-bold'>Password </label>
                          <Field
                            type='password'
                            className={`w-full border px-3 py-2 rounded mt-1`}
                            placeholder='Enter Password'
                            name='password'
                            value={password}
                            onChange={(e: {
                              target: { value: SetStateAction<string> }
                            }) => {
                              handleChange(e)
                              setPassword(e.target.value)
                            }}
                          />
                          <ErrorMessage
                            name='password'
                            component='div'
                            className='text-red-500 text-xs mt-1 mb-2'
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <button
                        type='submit'
                        className='w-full bg-black text-white py-2 rounded mt-5 h-[48px]'
                      >
                        CONTINUE
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className='text-center my-4 relative'>
                <div className='absolute top-1/2 left-0 w-full border-t border-gray-300'></div>
                <span className='bg-white px-3 relative text-sm text-gray-500'>
                  or continue with
                </span>
              </div>

              <div className='flex justify-center my-4'>
                <button className='flex items-center border px-4 py-2 rounded text-sm font-medium w-[144px]'>
                  <svg
                    className='w-6 h-5 mr-4'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
                      fill='#1877F2'
                    />
                  </svg>
                  Facebook
                </button>
              </div>

              <p className='text-center text-gray-500 mt-4 pt-[60px]'>
                By signing up you accept our{' '}
                <a href='#' className='text-blue-500'>
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href='#' className='text-blue-500'>
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LogIn
