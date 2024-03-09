import "./steps.css";
import Navbar from "../navbar/Navbar.jsx";
import RecipeOverview from "../components/RecipeOverview.jsx";
import CheckBoxLI from "../components/CheckBoxLI.jsx";

export default function Steps() {
	return (
		<main>
			<Navbar/>

			<div className="px-6 py-3 pb-16">
				<RecipeOverview/>

				<div className="w-full mt-4 px-4">
					<h2 className="text-3xl mb-4">
						<span className="border-b-2 border-black">
							Cooking &amp; Preparation Steps:
						</span>
					</h2>

					<div className="w-full px-4">
						<ol className="w-full flex flex-col gap-0.5 list-decimal text-lg [&>*:hover]:bg-sky-100 [&>*]:p-1">
							<li>In a medium size bowl, combine all the steak marinade ingredients together.</li>
							<li>Set aside while potatoes cook.</li>
							<li>Heat a large skillet over medium-high heat and add the tablespoons of olive oil and one tablespoon of the butter.</li>
							<li>Add the potatoes to the skillet and cook for about 8 minutes, until browned and cooked through.</li>
							<li>Transfer to a plate.</li>
							<li>In the same skillet, add the rest of the butter, the garlic and Italian seasoning.</li>
							<li>Cook for 30 seconds until aromatic.</li>
							<li>Add the steak and spread it in a single layer, reserving leftover marinade.</li>
							<li>Cook for 1 minute without touching it, then toss it and sear for another minute.</li>
							<li>Pour the reserved marinade over the steak and cook for another minute.</li>
							<li>Add the potatoes back to the skillet and cook until warmed through.</li>
							<li>Season with salt and pepper to taste.</li>
							<li>Remove from heat and serve immediately garnished with fresh parsley or Parmesan cheese.</li>
						</ol>
					</div>
				</div>
			</div>
		</main>
	)
}
