import type { ComponentType } from "react";
import Home from "../components/Home";
import Destination from "../components/Destination";
import Crew from "../components/Crew";
import Technology from "../components/Technology";
import homeBg from "../assets/home/background-home-desktop.jpg";
import destinationBg from "../assets/destination/background-destination-desktop.jpg";
import crewBg from "../assets/crew/background-crew-desktop.jpg";
import technologyBg from "../assets/technology/background-technology-desktop.jpg";

type NavItem = {
  label: string;
  path: string;
  component: ComponentType;
  background: string;
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/", component: Home, background: homeBg },
  {
    label: "Destination",
    path: "/destination",
    component: Destination,
    background: destinationBg,
  },
  { label: "Crew", path: "/crew", component: Crew, background: crewBg },
  {
    label: "Technology",
    path: "/technology",
    component: Technology,
    background: technologyBg,
  },
];
