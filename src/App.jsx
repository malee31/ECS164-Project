import "./App.css";
import Home from "./sections/home/Home.jsx";
import Overview from "./sections/overview/Overview.jsx";
import Steps from "./sections/steps/Steps.jsx";
import Cooking from "./sections/cooking/Cooking.jsx";

function App() {
	return (
		<>
            <h1>Do not worry about links between pages yet, just stack the pages on top of each other and we can separate them later</h1>
            <Home/>
            <Overview/>
            <Steps/>
            <Cooking/>
        </>
	);
}

export default App
