import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Banner/Navbar";
import Packages from "./Components/Packages/Packages";

const packageResponse = fetch("toolPackages.json").then((res) => res.json());

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
    </>
  );
}

export default App;
