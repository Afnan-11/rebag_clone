import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NewArrivals from './Pages/NewArrivals'
import Nav from './Components/Navbar/Nav'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className=''>
      <div className=''>
        <Header />
      </div>
      <div className='ml-4'>
        <Nav/>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newArrivals' element={<NewArrivals />} />
      </Routes>

      <div className='mt-[100px]'>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
