import { Link } from "react-router-dom";
import Button from "./Button";

type NavItemProps = {
  label: string;
  path: string;
  index: number;
  isActive?: boolean;
};

export default function NavItem({
  label,
  path,
  index,
  isActive = false,
}: NavItemProps) {
  const formattedIndex = index.toString().padStart(2, "0");

  return (
    <Link to={path}>
      <Button
        variant="primary"
        className={`h-1200 items-center ${isActive ? "!border-white/100" : ""}`}
      >
        <div className="font-bold">{formattedIndex}</div>
        {label}
      </Button>
    </Link>
  );
}
