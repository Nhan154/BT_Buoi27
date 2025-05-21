import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoeShop from "./ShoeShop - Copy/ShoeShop";
import Navbar from "./Component/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <Navbar />

          <ShoeShop />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
