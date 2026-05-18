import PackageCard from "../Packages/PackageCard"
import Pricing from "../Pricing/Pricing";
import Steps from "../Steps/Steps";

const pricingResponse = fetch("pricingData.json").then((res) => res.json());

const Products = ({packageData , handleCart , cartCount}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-y-10">
        {packageData.map((packages) => (
          <PackageCard key={packages.id} pkg={packages} handleCart={handleCart} cartCount={cartCount}></PackageCard>
        ))}
      </div>
      <Steps></Steps>
        <Pricing pricingResponse={pricingResponse}></Pricing>
        </div>
    );
};

export default Products;