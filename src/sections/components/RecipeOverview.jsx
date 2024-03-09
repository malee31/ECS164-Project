export default function RecipeOverview() {
	return (
			<div className="flex flex-row gap-4">
				<div className="max-h-48 max-w-48">
					<img
						className="h-full"
						src="/Mashed_Potatoes.png"
						alt="Steak and Potatoes"
					/>
				</div>

				<div className="w-full flex flex-col items-stretch gap-1">
					<h1 className="text-3xl">Steak and Potatoes</h1>
					<a
						className="text-blue-500 underline font-bold"
						href="https://cravinghomecooked.com/garlic-butter-steak-and-potatoes/"
					>
						Source: Joanna Cismaru
					</a>
					<p>Super rich potatoes and thick slabs of meat</p>
					<p>
						Prep Time: 30 min<br/>
						Ingredients: 10<br/>
						Difficulty: 3.5/5<br/>
					</p>
				</div>
			</div>
	);
}