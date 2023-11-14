import { useState } from "react";
import {MyComponent}	from "MyComponent"
import {Auction} from "Auction"
import {Discover} from "Discover"
import {Footer} from "Footer"
import {Header} from "Header"
import {ProductCard} from "ProductCard"
import {Welcome} from "Welcome"



import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header/>
			<Welcome/>
			<Auction/>
			<Discover/>
			<Footer/>
		</>
	);
}

export default App;
