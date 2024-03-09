import { Link } from "react-router-dom";
import clipboardIcon from "../../../assets/icons/Clipboard.svg";
import cartIcon from "../../../assets/icons/Cart.svg";
import clockIcon from "../../../assets/icons/Clock.svg";

export default function Bottombar() {
	return (
		<nav className="fixed bottom-0 flex flex-col items-center w-full pt-2 bg-[var(--navbar-brown-bg)] z-50">
			<div className="w-full flex flex-row items-center justify-center gap-1 sm:gap-8 md:gap-16 bg-[var(--sub-navbar-brown-bg)]">
				<Link
					className="flex flex-row justify-center w-64 px-8 pt-3 pb-2 bg-[var(--view-ingredients-bg)] rounded-t-[1.5rem] text-center text-nowrap"
					to="/overview"
				>
					View Ingredients
					<span className="relative pl-2 w-6 h-6 inline-block">
						<img
							className="w-full h-full relative"
							src={cartIcon}
							alt="Cart"
						/>
					</span>
				</Link>
				<Link
					className="flex flex-row justify-center w-64 px-8 pt-3 pb-2 bg-[var(--view-timeline-bg)] rounded-t-[1.5rem] text-nowrap"
					to="/cooking"
				>
					View Timeline
					<span className="relative pl-2 w-6 h-6 inline-block">
						<img
							className="w-full h-full relative"
							src={clockIcon}
							alt="Clock"
						/>
					</span>
				</Link>
				<Link
					className="flex flex-row justify-center w-64 px-8 pt-3 pb-2 bg-[var(--view-steps-bg)] rounded-t-[1.5rem] text-center text-nowrap"
					to="/steps"
				>
					View Steps

					<span className="relative pl-2 w-6 h-6 inline-block">
						<img
							className="w-full h-full relative"
							src={clipboardIcon}
							alt="Clipboard"
						/>
					</span>
				</Link>
			</div>
		</nav>
	)
}
