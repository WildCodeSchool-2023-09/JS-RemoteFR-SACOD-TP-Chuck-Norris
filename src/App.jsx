import axios from "axios";
import { useState } from "react";

function getData(api, setter) {
	axios
		.get(api)
		.then((response) => setter(response.data))
		.catch((err) => console.error(err));
}

function App() {
	const [joke, setJoke] = useState("");
	const BASE_API = "https://api.chucknorris.io/jokes/random";

	return (
		<div>
			<h1>Joke Chuck Norris</h1>
			<p>{joke.value}</p>
			<button onClick={() => getData(BASE_API, setJoke)}>
				Une autre joke ? 🔁
			</button>
		</div>
	);
}

export default App;
