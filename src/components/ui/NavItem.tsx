import { Link } from "react-router-dom";
import Button from "./Button";
import FormatNumber from "../../utils/FormatNumber";

type NavItemVariant = "navbar" | "sidebar";

type NavItemProps = {
  label: string;
  path: string;
  index: number;
  isActive?: boolean;
  variant?: NavItemVariant;
  onClick?: () => void;
};

export default function NavItem({
  label,
  path,
  index,
  isActive = false,
  variant = "navbar",
  onClick,
}: NavItemProps) {
  return (
    <Link to={path}>
      {variant === "navbar" && (
        <Button
          variant="primary"
          className={`h-1200 items-center ${isActive ? "!border-white/100" : ""}`}
        >
          <div className={`font-bold ${isActive ? "hidden md:block" : ""}`}>
            <FormatNumber number={index} />
          </div>
          {label}
        </Button>
      )}
      {variant === "sidebar" && (
        <Button
          variant="primary"
          className={`text-preset-8-desktop !border-b-0 w-full ${isActive ? "border-r-3 !border-r-white/100" : ""}`}
          onClick={onClick}
        >
          <div className="font-bold">
            <FormatNumber number={index} />
          </div>
          {label}
        </Button>
      )}
    </Link>
  );
}
