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

const errorMsgs = {
	badInput: "Bad input",
	customError: "Custom error",
	patternMismatch: "Pattern mismatch",
	rangeOverflow: "Number too large",
	rangeUnderflow: "Number too small",
	stepMismatch: "Step mismatch",
	tooLong: "Text too long",
	tooShort: "Text too short",
	typeMismatch: "Wrong type",
	valueMissing: "Input missing",
};

form.addEventListener("focusout", (e) => {
	const target = e.target;
	let errorMsg = "";
	const validityObject = target.validity;
	const keys = Object.keys(errorMsgs);
	const filtered = keys.filter((key) => validityObject[key]);
	for (const element of filtered) {
		errorMsg += `${errorMsgs[`${element}`]}. `;
	}
	switch (target.id) {
		case "email":
			break;
		case "country":
			break;
		case "postcode":
			break;
		case "password":
			break;
		case "confirmPassword":
			break;
	}
});

//const validityObject = email.validity;
//console.log(validityObject);
//
//console.log(keys);
//
//console.log(filtered);
//
//console.log(errorMsg);

assignVariables(jsForm);
