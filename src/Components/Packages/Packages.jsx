import { use } from "react";
import PackageCard from "./PackageCard";

const Packages = ({ packageResponse }) => {
  const packageData = use(packageResponse);
  console.log(packageData);
  return (
    <div className="w-10/12 mx-auto my-36">
      <div className="flex flex-col gap-5 items-center text-center my-10">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="opacity-50">
          Choose from our curated collection of premium digital products
          designed <br /> boost your productivity and creativity.
        </p>
        <div>
          <button className="btn">Products</button>
          <button className="btn">Cart</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-10">
        {packageData.map((packages) => (
          <PackageCard key={packages.id} pkg={packages}></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default Packages;
