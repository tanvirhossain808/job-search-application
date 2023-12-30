import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { OutletContainer } from "./Outlet/OutlesContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <OutletContainer></OutletContainer>
    </>
  );
}

export default App;
