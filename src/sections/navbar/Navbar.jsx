import "./navbar.css";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/Home.svg";
import clipboardIcon from "../../assets/icons/Clipboard.svg";
import cartIcon from "../../assets/icons/Cart.svg";
import clockIcon from "../../assets/icons/Clock.svg";

export default function Navbar() {
	return (
		<nav className="sticky top-0 flex flex-col items-center w-full pt-2 bg-[var(--navbar-brown-bg)]">
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

			<div className="w-full flex flex-row items-center justify-center gap-1 sm:gap-8 md:gap-16 bg-[var(--sub-navbar-brown-bg)]">
				<Link
					className="w-48 px-8 py-1 bg-[var(--view-ingredients-bg)] rounded-t-[1.5rem] text-center text-nowrap"
					to="/overview"
				>
					View Ingredients
					<span className="relative pl-2 w-6 h-6 inline-block">
						<img
							className="w-full h-full relative top-[5px]"
							src={cartIcon}
							alt="Cart"
						/>
					</span>
				</Link>
				<Link
					className="w-48 px-8 py-1 bg-[var(--view-timeline-bg)] rounded-t-[1.5rem] text-nowrap"
					to="/cooking"
				>
					View Timeline
					<span className="relative pl-2 w-6 h-6 inline-block">
						<img
							className="w-full h-full relative top-[5px]"
							src={clockIcon}
							alt="Clock"
						/>
					</span>
				</Link>
				<Link
					className="w-48 px-8 py-1 bg-[var(--view-steps-bg)] rounded-t-[1.5rem] text-center text-nowrap"
					to="/steps"
				>
					View Steps

					<span className="relative pl-2 w-6 h-6 inline-block">
						<img
							className="w-full h-full relative top-[5px]"
							src={clipboardIcon}
							alt="Clipboard"
						/>
					</span>
				</Link>
			</div>
		</nav>
	)
}
