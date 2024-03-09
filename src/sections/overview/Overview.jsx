import "./overview.css";
import Navbar from "../navbar/Navbar.jsx";
import RecipeOverview from "../components/RecipeOverview.jsx";
import CheckBoxLI from "../components/CheckBoxLI.jsx";

export default function Overview() {
	return (
		<main>
			<Navbar/>

			<div className="px-6 py-3">
				<RecipeOverview/>

				<div className="w-full mt-4">
					<h2 className="text-3xl mb-4">
						<span className="border-b-2 border-black">
							Ingredients Checklist:
						</span>
					</h2>

					<ul className="w-full flex flex-col gap-0.5">
						<CheckBoxLI>
							1½ pounds sirloin steak cut into 1 inch cubes
						</CheckBoxLI>
						<CheckBoxLI>
							⅓ cup soy sauce low sodium
						</CheckBoxLI>
						<CheckBoxLI>
							1 tablespoon olive oil
						</CheckBoxLI>
						<CheckBoxLI>
							1½ pounds baby potatoes
						</CheckBoxLI>
						<CheckBoxLI>
							1 tablespoon olive oil
						</CheckBoxLI>
						<CheckBoxLI>
							3 tablespoons butter
						</CheckBoxLI>
						<CheckBoxLI>
							5 cloves garlic minced
						</CheckBoxLI>
						<CheckBoxLI>
							1 tablespoon Italian seasoning
						</CheckBoxLI>
						<CheckBoxLI>
							½ teaspoon salt or to taste
						</CheckBoxLI>
						<CheckBoxLI>
							½ teaspoon freshly ground black pepper or to taste
						</CheckBoxLI>
					</ul>
				</div>
			</div>
		</main>
	)
}
