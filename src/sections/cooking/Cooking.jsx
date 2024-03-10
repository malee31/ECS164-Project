import "./cooking.css";
import Navbar from "../components/navbar/Navbar.jsx";
import Bottombar from "../components/bottombar/Bottombar.jsx";
import Timeline from "../components/timeline/Timeline.jsx";
import Cards from "../components/cards/Cards.jsx";
import { useState } from "react";

export default function Cooking() {
	const [showCards, setShowCards] = useState(false);

	return (
		<>
			<Navbar/>
			<main className="pb-24">
				<h1 className="text-4xl flex items-center gap-4 px-8 py-4">
					<img
						className="h-16 inline-block"
						src="/Mashed_Potatoes.png"
						alt="Steak and Potatoes"
					/>
					<span>Steak &amp; Potatoes</span>
				</h1>

				<Timeline setShowCards={setShowCards}/>

				{showCards && (
					<Cards/>
				)}
			</main>
			<Bottombar/>
		</>
	)
}
