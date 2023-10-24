import axios from "axios";

function App() {
	axios
		.get("https://api.chucknorris.io/jokes/random")
		.then((response) => console.log(response.data));

	return (
		<div>
			<h1>Joke Chuck Norris</h1>
			<p>ceci est ma joke</p>
			<button>Une autre joke ? 🔁</button>
		</div>
	);
}

export default App;
