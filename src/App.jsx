import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./sections/home/Home.jsx";
import Steps from "./sections/steps/Steps.jsx";
import Overview from "./sections/overview/Overview.jsx";
import Cooking from "./sections/cooking/Cooking.jsx";

function App() {
	return (
		<Router>
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
