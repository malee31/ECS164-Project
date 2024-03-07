import "./filterbar.css";
import MagnifyingIcon from "../../assets/icons/MagnifyingGlass.svg";

export default function Filterbar() {
	return (
		<nav className="sticky top-0 w-full px-16 py-2 bg-[var(--navbar-brown-bg)]">
			<div className="flex flex-row gap-4 mb-2 items-center justify-center">
				<h1 className="inline text-6xl kiwi-maru-medium font-bold">Cooking Across Time</h1>
				<img
					className="inline-block w-24 h-24"
					src="/CAT_Icon.png"
					alt="CAT"
				/>
			</div>

			<div className="flex flex-row items-center justify-center gap-8">
				<div className="inline-block text-xl kiwi-maru-normal pr-0.5 text-nowrap">Filter By:</div>

				<label className="relative min-w-32 px-2 pt-4 bg-white">
					<span className="absolute top-0 left-2">Difficulty</span>
					<select
						className="py-2 text-lg"
						defaultValue="Any"
					>
						<option value="Any">Any</option>
						<option value="Simple">Simple</option>
						<option value="Moderate">Moderate</option>
						<option value="Experienced">Experienced</option>
					</select>
				</label>

				<label className="relative min-w-32 px-2 pt-4 bg-white">
					<span className="absolute top-0 left-2">Duration</span>
					<select
						className="py-2 text-lg"
						defaultValue="30 Minutes"
					>
						<option value="30 Minutes">&lt; 30 Minutes</option>
						<option value="< 1 Hour">&lt; 1 Hour</option>
						<option value="< 10 Hours">&lt; 10 Hours</option>
						<option value="All">All</option>
					</select>
				</label>

				<label className="relative min-w-32 px-2 pt-4 bg-white">
					<span className="absolute top-0 left-2">Cuisine</span>
					<select
						className="py-2 text-lg"
						defaultValue="All"
					>
						<option value="All">All</option>
						<option value="Italian">Italian</option>
						<option value="American">American</option>
						<option value="Asian">Asian</option>
						<option value="Uncategorized">Uncategorized</option>
					</select>
				</label>

				{/* TODO: Unhide and Implement later */}
				<button className="w-12 h-12 p-3 bg-white cursor-not-allowed hidden">
					<img
						alt="Search"
						src={MagnifyingIcon}
					/>
				</button>
			</div>
		</nav>
	)
}
