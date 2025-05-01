
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
// import LogIn from "./LogIn";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="relative  font-canela cursor-pointer" >
      <div className="hidden md:flex gap-5">
        <p>Home</p>
        <p>Shop</p>
        <p>Sell</p>
        <p>Blog</p>
        <p>Contact Us</p>
        {/* <LogIn /> */}
      </div>

  
      <button
        className="md:hidden flex items-center text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

     
      {isOpen && (
        <div className="fixed top-[82px] right-0 w-1/3 h-full bg-white shadow-md flex flex-col items-center gap-4 md:hidden">
          
          <p onClick={() => setIsOpen(false)}>Home</p>
          <p onClick={() => setIsOpen(false)}>Shop</p>
          <p onClick={() => setIsOpen(false)}>Sell</p>
          <p onClick={() => setIsOpen(false)}>Blog</p>
          <p onClick={() => setIsOpen(false)}>Contact Us</p>
          {/* <LogIn /> */}
        </div>
      )}
    </div>
  );
};

export default Navigation;

