import { useState } from 'react'
import Content from '../Components/Content'
import Carosal from '../Components/Carosal'
import Context from '../Components/context'
import Consing from '../Components/Consing'
import Tearnding from '../Components/Teandings'

const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <>
     <div className=" w-[100%] justify-center mt-4 mb-6">
     <Content/>
     
     </div>
     <div className='mb-[80px]'>
      <Tearnding/>
     </div>
     <div className=''>
        <Context/>
       </div>
     <div className='flex justify-center h-[700px]'>
     <Carosal/>
     </div>
     <div className='flex justify-center mt-[50px] '>
      <Consing/>
     </div>
    </>
       
  )
}

export default Home