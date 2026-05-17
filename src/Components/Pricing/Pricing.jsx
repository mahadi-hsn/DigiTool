import { use } from "react";
import PriceCard from "./PriceCard";

const Pricing = ({ pricingResponse }) => {
  const pricingData = use(pricingResponse);
  return (
    <div className="w-9/12 mx-auto my-20">
      <div className=" text-center space-y-3 mb-10">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="opacity-60">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {pricingData.map((price) => (
          <PriceCard key={price.id} pricing={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
