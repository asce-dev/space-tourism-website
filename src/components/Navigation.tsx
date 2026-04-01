import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Link to="/crew">Home</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/crew">Crew</Link>
      <Link to="/technology">Technology</Link>
    </>
  );
}
