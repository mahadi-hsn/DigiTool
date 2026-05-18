import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./Components/Banner/Navbar";
import Packages from "./Components/Packages/Packages";

import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const packageResponse = fetch("toolPackages.json").then((res) => res.json());

function App() {
  const [cartCounts, setCartCounts] = useState([]);

  const cartCount = (pkg) => {
    const newCount = [...cartCounts, pkg];
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
            <Packages
              packageResponse={packageResponse}
              cartCount={cartCount}
              setCartCounts={setCartCounts}
            ></Packages>
          </Suspense>
        </div>
        
      </main>

      <footer>
        <Footer></Footer>
      </footer>

      <ToastContainer />
    </>
  );
}

export default App;
