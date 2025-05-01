type cardProps = {
    image: string;
    brand?: string;
    name?: string;
}
const card = ({image, brand, name}: cardProps) => {
 
    return (
        <div className="flex space-between flex-col items-center bg-gray-200 gap-6 shadow-md
         sm:!w-[80%] px-[0px] xs:w-[300px] m-[40px] pb-5 ">
          <img src={image} alt={name} className="w-full pb-[50px]  p-[30px]" />
          {brand && <h3 className="text-[22px] ">{brand}</h3>}
          {name && <p className="text-[18px]">{name}</p>}
        </div>
      );
}

export default card
