import LogIn from "./LogIn";
import Neavigation from "./Neavigation";
import Searchs from "./Search";
import Logo from '/images/logo.webp'
 
const index = () => {
  return (
    
    <div className="flex justify-between items-center p-5  shadow-sm">
        <img src={Logo} alt="" />
      <Searchs/>
      <Neavigation/>
      <LogIn/>
    </div>

    
  )
}

export default index
