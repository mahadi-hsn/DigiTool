import PackageCard from "../Packages/PackageCard"
const Products = ({packageData}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-y-10">
        {packageData.map((packages) => (
          <PackageCard key={packages.id} pkg={packages}></PackageCard>
        ))}
      </div>
        </div>
    );
};

export default Products;