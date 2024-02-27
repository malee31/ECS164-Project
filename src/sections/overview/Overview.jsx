import "./overview.css";
import Navbar from "../navbar/Navbar.jsx";
import PropTypes from "prop-types";
import CheckIcon from "../../assets/icons/Check.svg";

function CheckBoxLI({ children }) {
	return (
		<li className="text-lg">
			<label className="flex flex-row gap-3 cursor-pointer">
				<div className="inline-block my-0.5">
					<input
						className="w-6 h-6 p-1 rounded-full hidden li-check-box"
						type="checkbox"
					/>
					<span
						className="inline-block w-6 h-6 bg-white border-2 rounded-full cursor-pointer"
					>
					<span className="flex w-full h-full p-0.5 items-center justify-center">
						<img
							className="inline-block check-icon"
							alt="✓"
							src={CheckIcon}
						/>
					</span>
				</span>
				</div>
				<span>
					{children}
				</span>
			</label>
		</li>
	);
}

CheckBoxLI.propTypes = {
	children: PropTypes.node.isRequired,
};

export default function Overview() {
	return (
		<main>
			<Navbar/>

			<div className="px-6 py-3">
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
