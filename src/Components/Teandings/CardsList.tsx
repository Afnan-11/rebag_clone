import Card2 from "../Card2";

const cards = [
  {
    image: "/images/bag1.jpg", 
    title: "Join Rebag+",
    description: "Get 5% off all purchases, free shipping, & more",
  },
  {
    image: "/images/watch.jpg",
    title: "This Just In",
    description: "Shop just-landed investment pieces by Gucci, Dior, & more",
  },
  {
    image: "/images/bag2.jpg",
    title: "Premium Payouts",
    description: "Get up to 27% in bonus payouts in 12 months*",
  },
];

const CardsList = () => {
  return (
    <div className="flex  justify-center items-center gap-1 px-4 py-8 md:!flex-row  xs:w-[100%] xs:flex-col  font-canela">
      {cards.map((card, index) => (
        <Card2 key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsList;




