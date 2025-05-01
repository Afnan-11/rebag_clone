import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card2: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="flex md:!flex-col  xs:flex-col xs:w-[65%] md:!w-[450px]  items-center justify-center text-center w-1/4">
     
      <div className="  ">
        <img src={image} alt={title} className="md:!w-[392px] "  />
      </div>

      <h3 className="  mt-4 font-canela text-[30px] ">{title}</h3>
      <p className=" text-[1rem] mt-2 w-[250px]">{description}</p>
    </div>
  );
};

export default Card2;

