import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl bg-rose-600">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
