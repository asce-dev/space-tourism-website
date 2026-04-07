import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import { navItems } from "./data/navigation";

function App() {
  const location = useLocation();
  const currentNavItem = navItems.find(
    (item) => item.path === location.pathname,
  );
  const bg = currentNavItem?.background;

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-screen flex flex-col max-w-(--app-max-width) mx-auto">
        <Navigation />
        <Routes>
          {navItems.map((item) => {
            const Component = item.component;
            return (
              <Route key={item.path} path={item.path} element={<Component />} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
