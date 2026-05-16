import userImage from "../../assets/user.png";
import packageImage from "../../assets/package.png";
import rocketImage from "../../assets/rocket.png";
const Steps = () => {
  return (
    <div className="bg-slate-100 p-16">
      <div className="w-10/12 mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-5xl mb-4 font-bold">Get Started in 3 Steps</h1>
          <p>Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-3 gap-5 ">
          <div className="rounded-lg bg-white shadow-2xl space-y-5 flex flex-col items-center text-center px-6 py-20 relative">
            <div className="absolute top-2.5 right-3 bg-linear-to-r from-[#5f2df5] to-[#a10df5] text-white p-3 rounded-full w-9 h-9 flex items-center justify-center">
              <p>01</p>
            </div>

            <div className="rounded-full p-2 bg-slate-100 ">
              <img className="w-12 h-12" src={userImage} alt="userImage" />
            </div>
            <h1 className="font-semibold text-2xl">Create Account</h1>
            <p className="opacity-50">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="rounded-lg bg-white shadow-2xl space-y-5 flex flex-col items-center text-center px-6 py-20 relative">
            <div className="rounded-full p-2 bg-slate-100 ">
              <div className="absolute top-2.5 right-3 bg-linear-to-r from-[#5f2df5] to-[#a10df5] text-white p-3 rounded-full w-9 h-9 flex items-center justify-center">
                <p>02</p>
              </div>

              <img
                className="w-12 h-12"
                src={packageImage}
                alt="packageImage"
              />
            </div>
            <h1 className="font-semibold text-2xl">Choose Products</h1>
            <p className="opacity-50">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="rounded-lg bg-white shadow-2xl space-y-5 flex flex-col items-center text-center px-6 py-20 relative">
            
            <div className="absolute top-2.5 right-3 bg-linear-to-r from-[#5f2df5] to-[#a10df5] text-white p-3 rounded-full w-9 h-9 flex items-center justify-center">
                <p>03</p>
            </div>

            <div className="rounded-full p-2 bg-slate-100">
              <img className="w-12 h-12" src={rocketImage} alt="rocketImage" />
            </div>
            <h1 className="font-semibold text-2xl">Start Creating</h1>
            <p className="opacity-50">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
