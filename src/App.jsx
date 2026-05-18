import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./Components/Banner/Navbar";
import Packages from "./Components/Packages/Packages";
import Steps from "./Components/Steps/Steps";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const packageResponse = fetch("toolPackages.json").then((res) => res.json());
const pricingResponse = fetch("pricingData.json").then((res) => res.json());

function App() {
  const [cartCounts, setCartCounts] = useState([]);

  const cartCount = (pkg) => {
    const newCount = [...cartCounts , pkg];
    setCartCounts(newCount);
  };

  return (
    <>
      <header>
        <Navbar cartCounts={cartCounts}></Navbar>
      </header>

      <main>
        <div className="flex justify-center items-center">
          <Suspense
            fallback={
              <span className="loading loading-infinity loading-xl"></span>
            }
          >
            <Packages packageResponse={packageResponse} cartCount={cartCount} setCartCounts={setCartCounts}></Packages>
          </Suspense>
        </div>
        <Steps></Steps>
        <Pricing pricingResponse={pricingResponse}></Pricing>
      </main>

      <footer>
        <Footer></Footer>
      </footer>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
