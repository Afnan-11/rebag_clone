import Learn from "./Learn"
import Learn2 from "./Learn2";

const index = () => {
  return (
    <div className="flex justify-center gap-11 mt-20 mb-20 md:flex-row flex-col  items-center cursor-pointer">
    <div className="bg-[url('/images/Learn.jpg')]  xs:w-[100%] md:!w-[692px]  bg-no-repeat bg-cover bg-center  h-[736px] flex items-center justify-center ">
    <Learn/>
  </div>
  <div className="md:!w-[692px] h-[736px]  bg-[#F6E5D1] flex items-center justify-center  xs:w-[100%]" >
    <Learn2/>
  </div>
  </div>
  )
}

export default index
