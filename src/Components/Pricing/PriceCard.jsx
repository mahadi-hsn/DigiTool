import { Check } from "lucide-react";

const PriceCard = ({ pricing }) => {

  const { billing, buttonText, description, plan, popular, price, features } =
    pricing;
  return (
    
      <div className="card rounded-lg bg-white shadow-lg flex-1 h-full">
        <div className={`card-body ${popular ? "bg-linear-to-r from-[#5f2df5] to-[#a10df5] text-white" : "bg-slate-100"}  rounded-2xl h-full flex flex-col`}>
          {popular === true && (
            <span className="absolute -top-3 right-32 px-3 rounded-full text-[#ba4c00] bg-amber-200">
              Most Popular
            </span>
          )}

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">{plan}</h2>
            <p className="opacity-50">{description}</p>
            <span className="text-xl">
              <span className="font-bold">${price}</span>/{" "}
              <span className="opacity-60">{billing}</span>{" "}
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className={`${popular ? "text-white" : "text-[#31b968]"}`} />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <button className={`btn w-full ${popular ? "bg-white text-violet-600" : "bg-linear-to-r from-[#5f2df5] to-[#a10df5] text-white"}  shadow-[0_10px_25px_rgba(106,44,240,0.35) rounded-full`}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
  );
};

export default PriceCard;
