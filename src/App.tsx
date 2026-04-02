import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Navigation from "./components/Navigation";
import homeBg from "./assets/home/background-home-desktop.jpg";
import destinationBg from "./assets/destination/background-destination-desktop.jpg";
import crewBg from "./assets/crew/background-crew-desktop.jpg";
import technologyBg from "./assets/technology/background-technology-desktop.jpg";

const backgrounds: Record<string, string> = {
  "/": homeBg,
  "/destination": destinationBg,
  "/crew": crewBg,
  "/technology": technologyBg,
};

function App() {
  const location = useLocation();

  const bg = backgrounds[location.pathname];

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-screen flex flex-col max-w-(--app-max-width) mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
