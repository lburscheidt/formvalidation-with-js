import "./style.css";
console.log("hello");
if (process.env.NODE_ENV !== "production") {
	console.log("Looks like we are in development mode!");
}
const jsForm = document.querySelectorAll(".js-form");
function assignVariables(arr) {
	const elements = {};
	for (const el of arr) {
		if (!(el.id in elements)) {
			elements[el.id] = el;
		}
	}
	return elements;
}

assignVariables(jsForm);
