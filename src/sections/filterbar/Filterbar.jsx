import "./filterbar.css";

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
					<input
						type="text"
						className="py-2 text-lg"
						defaultValue="Any"
					/>
				</label>

				<label className="relative min-w-32 px-2 pt-4 bg-white">
					<span className="absolute top-0 left-2">Duration</span>
					<input
						type="text"
						className="py-2 text-lg"
						defaultValue="30 Minutes"
					/>
				</label>

				<label className="relative min-w-32 px-2 pt-4 bg-white">
					<span className="absolute top-0 left-2">Cuisine</span>
					<input
						type="text"
						className="py-2 text-lg"
						defaultValue="All"
					/>
				</label>
			</div>
		</nav>
	)
}
