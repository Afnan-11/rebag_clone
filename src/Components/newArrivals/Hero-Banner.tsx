export default function HeroBanner() {
  return (
    <div className="flex justify-center items-center screen !mt-4">
      <div className="relative h-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-[100%]">
          <div className="relative h-full w-full ">
            <img
              src="https://shop.rebag.com/cdn/shop/t/423/assets/new-arrivals-top-nav-03.05.2025_1280x.jpg"
              alt="Luxury handbag"
              className="object-cover h-full w-[100%]"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-6 bg-[#f9f5f0] w-full">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">New Arrivals</h1>
            <p className="text-center text-sm md:text-base">
              Discover the latest statement-making styles from Chanel, Rolex, and more
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

