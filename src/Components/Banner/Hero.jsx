import { Play } from "lucide-react";
import bannerImage from "../../assets/banner.png";
import badge from "../../assets/Group 5.png";
const Hero = () => {
  return (
    <div className="">
      <div className="w-10/12 mx-auto flex py-15 justify-between items-center">
        <div className="space-y-5 w-160">
          <div className="badge badge-soft badge-primary rounded-full">
            <span>
              <img src={badge} alt="" />
            </span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-7xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="opacity-50">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-3">
            <button className="btn bg-linear-to-r from-[#5f2df5] to-[#a10df5] text-white rounded-full">
              Explore Products
            </button>
            <button
              className="
        flex items-center gap-3
        btn
        border-2 border-violet-600
        rounded-full
        text-violet-600
        hover:bg-violet-600
        hover:text-white
        transition-all duration-300
      "
            >
              <Play size={16} strokeWidth={2.5} />
              Watch Demo
            </button>
          </div>
        </div>

        <div>
          <img src={bannerImage} alt={"Banner image"} />
        </div>
      </div>


      <div className="bg-linear-to-r from-[#5f2df5] to-[#a10df5]">


        <div className="w-10/12 mx-auto flex py-15 items-center">

          <div className="text-white space-y-3 text-center flex-1">
            <h1 className="text-5xl font-bold">50K+</h1>
            <p className="opacity-80">Active Users</p>
          </div>
          
          <div className="text-white space-y-3 text-center border-l border-white/30 flex-1">
            <h1 className="text-5xl font-bold">200+</h1>
            <p className="opacity-80">Premium Tools</p>
          </div>

          <div className="text-white space-y-3 text-center border-l border-white/30 flex-1">
            <h1 className="text-5xl font-bold">4.9</h1>
            <p className="opacity-80">Rating</p>
          </div>
          
        </div>


      </div>



    </div>
  );
};

export default Hero;
