import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Banner/Navbar";
import Packages from "./Components/Packages/Packages";
import Steps from "./Components/Steps/Steps";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";

const packageResponse = fetch("toolPackages.json").then((res) => res.json());
const pricingResponse = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
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
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
