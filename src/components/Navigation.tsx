import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import { navItems } from "../data/navigation";
import NavItem from "./ui/NavItem";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex py-300 md:py-0 lg:pt-500">
        <div className="flex w-full gap-800 items-center z-10 pl-300 md:pl-500 md:max-w-[160px] md:-mr-400 lg:max-w-none lg:pl-800">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-[40px] h-[40px] md:min-w-[48px] md:h-[48px]"
            />
          </Link>
          <div className="w-full h-px bg-white opacity-25 hidden lg:block"></div>
        </div>
        <div className="w-full justify-end bg-white/5 backdrop-blur-[80px] gap-600 px-500 lg:px-800 hidden md:flex">
          {navItems.map((item, index) => (
            <NavItem
              key={item.label}
              label={item.label}
              path={item.path}
              index={index}
              isActive={location.pathname === item.path}
            />
          ))}
        </div>
        <div className="w-full flex justify-end items-center pr-300 md:hidden">
          <img
            src={Hamburger}
            alt="Hamburger"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>
      </div>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed flex flex-col md:hidden pl-400 top-0 right-0 h-screen w-[254px] bg-blue-900/15 backdrop-blur-[80px] z-50 gap-600">
            <div className="flex justify-end py-400 pr-300">
              <img
                src={Close}
                alt="Close"
                className="cursor-pointer w-[19px] h-[19px]"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            </div>
            <div className="flex flex-col gap-400">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  path={item.path}
                  index={index}
                  isActive={location.pathname === item.path}
                  variant="sidebar"
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
