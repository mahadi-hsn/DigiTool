import './App.css'
import Navbar from './Components/Banner/Navbar'
import Packages from './Components/Packages/Packages';


const packageResponse = fetch('toolPackages.json').then(res => res.json())


function App() {

  return (
    <>
      <Navbar></Navbar> 
      <Packages packageResponse={packageResponse}></Packages>
    </>
  )
}

export default App
