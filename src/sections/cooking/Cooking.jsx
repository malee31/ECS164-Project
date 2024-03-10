import "./cooking.css";
import Navbar from "../components/navbar/Navbar.jsx";
import Bottombar from "../components/bottombar/Bottombar.jsx";
import Timeline from "../components/timeline/Timeline.jsx";
import Cards from "../components/cards/Cards.jsx";

export default function Cooking() {
	return (
		<>
			<Navbar/>
			<main>
				<h1 className="text-4xl flex items-center gap-4 px-8 py-4">
					<img
						className="h-16 inline-block"
						src="/Mashed_Potatoes.png"
						alt="Steak and Potatoes"
					/>
					<span>Steak &amp; Potatoes</span>
				</h1>

				<Timeline/>

				<Cards/>
			</main>
			<Bottombar/>
		</>
	)
}
