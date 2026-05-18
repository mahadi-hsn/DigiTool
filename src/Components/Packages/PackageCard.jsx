import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const PackageCard = ({ pkg, handleCart, cartCount }) => {
  const { title, price, icon, features, description, billing, badge } = pkg;
  const [selected, setSelected] = useState(false);
 
  const handleBuyNowButton = () => {
    setSelected(true);
    handleCart(pkg);
    toast.info(title + " is selected!");
    cartCount(pkg);
  };
  return (
    <div className="">
      <div className="card w-96 rounded-lg bg-white shadow-lg">
        <div className="card-body">
          <span
            className={`absolute top-2 right-3 px-3 rounded-full ${
              badge === "Popular"
                ? "bg-purple-100 text-white"
                : badge === "New"
                  ? "bg-green-100 text-green-600"
                  : badge === "Best Seller"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-gray-100 text-gray-600"
            }}`}
          >
            {badge}
          </span>
          <div className="space-y-3">
            <div className="flex items-center w-8 h-8">
              <img className="w-full" src={icon} alt="" />
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="opacity-50">{description}</p>
            <span className="text-xl">
              <span className="font-bold">${price}</span>/
              <span className="opacity-60">{billing}</span>
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="text-[#31b968]" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button
              onClick={() => handleBuyNowButton()}
              disabled={selected}
              className={`${selected ? "btn w-full bg-green-400 shadow-[0_10px_25px_rgba(106,44,240,0.35) text-white rounded-full" : "btn w-full bg-linear-to-r from-[#5f2df5] to-[#a10df5] shadow-[0_10px_25px_rgba(106,44,240,0.35) text-white rounded-full"}`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
