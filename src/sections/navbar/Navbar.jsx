import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="sticky top-0 w-full bg-purple">
			<h1 className="text-4xl">Cooking Across Time</h1>
			<Link to={"/"}>Home</Link>
			<Link to={"/overview"}>Overview</Link>
			<Link to={"/steps"}>Steps</Link>
			<Link to={"/cooking"}>Cooking</Link>
		</nav>
	)
}
