

import Slider from "react-slick";
import Cards from "../card";
import { bags } from "../../FakeData/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button";

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          
        },
      },
    ],

  };


return (
  <div className="box-border text-black block font-['OpenSans-Regular'] text-[14px] font-normal h-auto leading-[19.6px] text-center md:!w-[100%] sm-w-3/2 px-4 md:px-6 lg:px-8 antialiased xs:w-[100vw]  font-canela">
    

    <h2 className=" font-canela text-[24px] items-center justify-center lg:text-[40px] tracking-widest flex h-[20px]">
      Discover the Latest Statement-Making Styles
    </h2>
 
    <Slider {...settings} className="mt-[60px] flex gap-[60px] justify-center  cursor-pointer">
      {bags.map((bag, index) => (
        <div key={index} className="">
          <Cards image={bag.image} brand={bag.brand} name={bag.name} />
        </div>
      ))}
    </Slider>

    <div className="flex justify-center mt-[100px] mb-[50px]">
      <Button className="bg-gray-800  text-white px-6 sm:px-8 md:px-12 lg:px-[80px] py-2 sm:py-3 md:py-4 text-sm sm:text-base" text="Shop All" />
    </div>
  </div>
);
}

export default Index;



