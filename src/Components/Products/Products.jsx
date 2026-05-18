import PackageCard from "../Packages/PackageCard"
const Products = ({packageData , handleCart , cartCount}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-y-10">
        {packageData.map((packages) => (
          <PackageCard key={packages.id} pkg={packages} handleCart={handleCart} cartCount={cartCount}></PackageCard>
        ))}
      </div>
        </div>
    );
};

export default Products;