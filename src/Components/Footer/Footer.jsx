import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";
import X from "../../assets/X.png";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className="w-9/12 mx-auto pt-30 pb-20 ">
        <div className=" flex justify-between">
          <div className="w-87.5 space-y-5">
            <h1 className="text-4xl font-bold">DigiTools</h1>
            <p className="opacity-60">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="space-y-3">
            <h6 className="text-[20px] ">Product</h6>
            <ul className="space-y-2 opacity-60">
              <li>
                <a href="/Features">Features</a>
              </li>
              <li>
                <a href="/Pricing">Pricing</a>
              </li>
              <li>
                <a href="/Templates">Templates</a>
              </li>
              <li>
                <a href="/Integrations">Integrations</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h6 className="text-[20px]">Resources</h6>
            <ul className="space-y-2 opacity-60">
              <li>
                <a href="/Documentation">Documentation</a>
              </li>
              <li>
                <a href="/Help Center">Help Center</a>
              </li>
              <li>
                <a href="/Community">Community</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h6 className="text-[20px]">Company</h6>
            <ul className="space-y-2 opacity-60">
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Blog">Blog</a>
              </li>
              <li>
                <a href="/Careers">Careers</a>
              </li>
              <li>
                <a href="/Press">Press</a>
              </li>
            </ul>
          </div>

          <div className="space-y-1">
            <h6 className="text-[20px]">Social Links</h6>
            <div className="flex gap-3">
              <div className="bg-white rounded-full p-1 w-8.75 h-8.75 flex items-center justify-center">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="bg-white rounded-full p-1 w-8.75 h-8.75 flex items-center justify-center">
                <img src={instagram} alt="instagram" />
              </div>
              <div className="bg-white rounded-full p-1 w-8.75 h-8.75 flex items-center justify-center">
                <img src={X} alt="X" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-9/12 mx-auto opacity-60">
        <hr />

        <div className="flex justify-between mt-5">
          <div>
            <p>&copy; 2026 DigiTools. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <a href="/PrivacyPolicy">Privacy Policy</a>
              </li>
              <li>
                <a href="/TermsOfService">Terms of Service</a>
              </li>
              <li>
                <a href="/Cookies">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
