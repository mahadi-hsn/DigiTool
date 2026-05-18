import { use, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";




const Packages = ({ packageResponse , cartCount , setCartCounts}) => {
  const packageData = use(packageResponse);
  const [selectedTab, setSelectedTab] = useState("products");


  const [cart, setCart] = useState([]);
  const handleCart = (pkg) => {
    const newCart = [...cart, pkg];
    setCart(newCart);
  };


  return (
    <div className="w-10/12 mx-auto my-36">
      <div className="flex flex-col gap-5 items-center text-center my-10">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="opacity-50">
          Choose from our curated collection of premium digital products
          designed <br /> boost your productivity and creativity.
        </p>

        <div className="p-2 border border-[#e7e7e7] rounded-full flex gap-4 bg-white">
          <button
            onClick={() => setSelectedTab("products")}
            className={`rounded-full cursor-pointer ${
              selectedTab === "products"
                ? "text-white px-5 py-2 bg-linear-to-r from-[#5f2df5] to-[#a10df5] shadow-[0_10px_25px_rgba(106,44,240,0.35)]"
                : "text-[#2b0f66] bg-transparent"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setSelectedTab("cart")}
            className={`rounded-full cursor-pointer ${
              selectedTab === "cart"
                ? "text-white px-5 py-2 bg-linear-to-r from-[#5f2df5] to-[#a10df5] shadow-[0_10px_25px_rgba(106,44,240,0.35)]"
                : "text-[#2b0f66] bg-transparent"
            }`}
          >
            Cart {(cart.length)}
          </button>
        </div>
      </div>

      

      {selectedTab === "products" ? (
        <Products handleCart={handleCart} packageData={packageData} cartCount={cartCount} ></Products>
      ) : (
        <Cart cart={cart} setCart={setCart} setCartCounts={setCartCounts}></Cart>
      )}
    </div>
  );
};

export default Packages;
