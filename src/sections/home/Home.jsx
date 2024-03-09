import "./home.css";
import Filterbar from "../components/filterbar/Filterbar.jsx";
import { Link } from "react-router-dom";

function RecipeCard() {
	return (
		<Link
			className="flex flex-col w-64 max-w-full p-2 border"
			to="/overview"
		>
			<img
				src="/Mashed_Potatoes.png"
				alt="Steak and Potatoes"
			/>
			<h2 className="text-2xl">Steak and Potatoes</h2>
			<span>Prep Time: 30 min</span>
			<span>Ingredients: 6</span>
			<span>Difficulty: 2/5</span>
		</Link>
	);
}

export default function Home() {
	return (
		<main>
			<Filterbar/>

			<section className="w-full px-12 py-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
				<RecipeCard/>
				<RecipeCard/>
				<RecipeCard/>
				<RecipeCard/>
				<RecipeCard/>
			</section>
		</main>
	)
}
