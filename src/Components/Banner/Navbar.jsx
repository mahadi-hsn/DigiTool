import { ShoppingCart } from "lucide-react";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around items-center bg-base-100 shadow-sm py-5">
        <div className="">
          <a
            href="/digitools"
            className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#5f2df5] to-[#a10df5]"
          >
            DigiTools
          </a>
        </div>
        <div className="flex">
          <ul className="flex gap-5 px-1">
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <span>
            <ShoppingCart></ShoppingCart>
          </span>
          <span>
            <a href="/login">Log In</a>
          </span>
          <span>
            <a className="btn bg-linear-to-r from-[#5f2df5] to-[#a10df5] text-white rounded-full">Get Started</a>
          </span>
        </div>
      </div>
      <Hero></Hero>
    </div>
  );
};

export default Navbar;
