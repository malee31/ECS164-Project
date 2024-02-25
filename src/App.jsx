import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./sections/home/Home.jsx";
import Overview from "./sections/overview/Overview.jsx";
import Steps from "./sections/steps/Steps.jsx";
import Cooking from "./sections/cooking/Cooking.jsx";
import Navbar from "./sections/navbar/Navbar.jsx";

function App() {
	return (
		<Router>
			<Navbar/>
			<Routes>
				<Route index={true} path="/" element={<Home/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/overview" element={<Overview/>}/>
				<Route path="/steps" element={<Steps/>}/>
				<Route path="/cooking" element={<Cooking/>}/>
			</Routes>
		</Router>
	);
}

export default App;
