import Button from "../Button";

const Shop = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white  font-canela cursor-pointer">
     <h1 className="  font-canela text-[58px] tracking-widest">Explore New Arrivals</h1>
     <p>Get your hands on the latest must-haves, from iconic <br />
         Hermès totes to versatile Louis Vuitton shoulder bags</p>
     <div className="flex  gap-3 justify-center mt-5">
       <Button text='Shop Now'/>
       <Button text='Sell Your Bag'/>
     </div>
    </div>
  )
}

export default Shop
