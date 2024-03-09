import "./navbar.css";
import { Link } from "react-router-dom";
import homeIcon from "../../../assets/icons/Home.svg";

export default function Navbar() {
	return (
		<nav className="sticky top-0 flex flex-col items-center w-full pt-2 bg-[var(--navbar-brown-bg)] z-50">
			<div className="w-full px-4 grid grid-cols-3 items-center justify-between justify-items-center">
				<Link
					to="/"
					className="inline-block justify-self-start"
				>
					<img
						alt="Home"
						src={homeIcon}
					/>
				</Link>
				<Link
					to="/"
					className="inline-block"
				>
					<img
						className="w-16 h-16"
						src="/CAT_Icon.png"
						alt="CAT"
					/>
				</Link>

				{/* Spacer */}
				<div/>
			</div>
		</nav>
	)
}
