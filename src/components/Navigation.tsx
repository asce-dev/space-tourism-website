import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";

export default function Navigation() {
  return (
    <div className="flex pt-500">
      <div className="flex w-full -mr-300 pl-800 gap-800 items-center z-10">
        <img src={Logo} alt="Logo" />
        <div className="w-full h-px bg-white opacity-25"></div>
      </div>
      <div className="flex w-full justify-end bg-white/5 backdrop-blur-[80px] gap-600 pr-800">
        <Link
          to="/"
          className="h-1200 inline-flex items-center text-preset-8 gap-150 border-b-3 border-white"
        >
          <div className="font-bold">00</div>
          HOME
        </Link>
        <Link
          to="/destination"
          className="h-1200 inline-flex items-center text-preset-8 gap-150"
        >
          <div className="font-bold">01</div>
          DESTINATION
        </Link>
        <Link
          to="/crew"
          className="h-1200 inline-flex items-center text-preset-8 gap-150"
        >
          <div className="font-bold">02</div>
          CREW
        </Link>
        <Link
          to="/technology"
          className="h-1200 inline-flex items-center text-preset-8 gap-150"
        >
          <div className="font-bold">03</div>
          TECHNOLOGY
        </Link>
      </div>
    </div>
  );
}
