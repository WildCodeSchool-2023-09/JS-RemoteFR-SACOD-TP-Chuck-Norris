import axios from "axios";
export default function getData(api, setter) {
	axios
		.get(api)
		.then((response) => setter(response.data))
		.catch((err) => console.error(err));
}
