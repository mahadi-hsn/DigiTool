import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Banner/Navbar";
import Packages from "./Components/Packages/Packages";
import Steps from "./Components/Steps/Steps";
import Pricing from "./Components/Pricing/Pricing";

const packageResponse = fetch("toolPackages.json").then((res) => res.json());
const pricingResponse = fetch("pricingData.json").then((res) => res.json());


function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center">
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <Packages packageResponse={packageResponse}></Packages>
        </Suspense>
      </div>
      <Steps></Steps>
      <Pricing pricingResponse={pricingResponse}></Pricing>
    </>
  );
}

export default App;
