import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "../Button";

const Footer = () => {
  const footerLinks = [
    {
      title: "BUY",
      links: ["For You", "New Arrivals", "Designers", "Bags", "Watches", "Jewelry", "Shoes", "Apparel", "Accessories", "Clearance"],
    },
    {
      title: "SELL",
      links: ["Sell Now", "Selling with Rebag", "Consign", "Trade", "Buyout", "Infinity Exchange", "Rebag's Most Wanted", "Premium Payouts", "Selling Guidelines", "Rebag x threadUP"],
    },
  
    {
      title: "COMPANY",
      links: ["About Us", "Why Trust Rebag?", "Rebag*", "Find a Store", "The Vault", "The Clair Report", "Rebag Stylist", "Rebag x Bloomingdale's"],
    },
    {
      title: "HELP",
      links: ["Contact Us", "FAQs", "Shipping", "Returns", "Financing", "Work at Rebag", "Accessibility"],
    },
  ];

  return (
    <footer className="bg-[rgb(249,249,249)] py-10 px-8 flex
    ">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 font-canela">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:col-span-1 text-sm text-center md:text-left flex flex-col items-center md:items-start flex">
          <h3 className="font-bold mb-3 text-[24px] font-canela">Sign up and get up to $300 off your first purchase</h3>
          <p className="mb-4">Claim your exclusive discount code when you sign up for SMS. Terms and conditions apply.</p>
          <Button text='Sing up' className="bg-gray-700 text-white text-[22px] py-2 px-[75px] "/>
          
          <div className="flex space-x-4 text-3xl  mb-6 mt-5 ">
            <FaFacebookF className="  " />
            <FaInstagram className=" " />
            <FaYoutube className=" " />
          </div>
         
          <div>
          
            <p className="text-[24px] font-semibold font-OpenSans ">Bloomingdale's</p>
            <p className="text-gray-600 text-xs">OFFICIAL RETAILER</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
