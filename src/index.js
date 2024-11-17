import "./style.css";
import { postalCodes } from "./postcodes";
if (process.env.NODE_ENV !== "production") {
	console.log("Looks like we are in development mode!");
}
const jsForm = document.querySelectorAll(".js-form");
const errorMsgs = {
	badInput: "Bad input.",
	patternMismatch: "Pattern mismatch.",
	rangeOverflow: "Number too large.",
	rangeUnderflow: "Number too small.",
	stepMismatch: "Step mismatch.",
	tooLong: "Text too long.",
	tooShort: "Text too short.",
	typeMismatch: "Wrong type.",
	valueMissing: "This field is required. Please fill it in.",
};
function assignVariables(arr) {
	const elements = {};
	for (const el of arr) {
		if (!(el.id in elements)) {
			elements[el.id] = el;
		}
	}
	return elements;
}

function setPostcodePattern() {
	const postCountry = postalCodes
		.find((postal) => postal.abbrev === country.value)
		.regex.replaceAll("/", "");
	console.log(postCountry);
	postcode.setAttribute("pattern", postCountry);
}

function setPasswordPattern() {
	confirmPassword.setAttribute("pattern", password.value);
}

window.onload(assignVariables(jsForm));

form.addEventListener("focusout", (e) => {
	const target = e.target;
	if (target.id === "resetBtn" || target === "submitBtn") {
		void 0;
	} else {
		if (target.checkValidity() || target.validity.valid) {
			target.setCustomValidity("");
			const targetTick = `${target.id}Tick`;
			const targetTickObject = document.getElementById(targetTick);
			targetTickObject.classList.remove("hidden");
			if (target === country) {
				setPostcodePattern();
			}
			if (target === password) {
				setPasswordPattern();
			}
		} else {
			let errorMsg = "";
			const keys = Object.keys(errorMsgs);
			const filtered = keys.filter((key) => target.validity[key]);
			for (const element of filtered) {
				errorMsg += `${errorMsgs[`${element}`]} `;
			}

			switch (target.id) {
				case "email":
					errorMsg +=
						"Email address must have the format email@provider.domain.";
					break;
				case "country":
					setPostcodePattern();
					errorMsg += "Please select a country from the dropdown list.";
					break;
				case "postcode":
					errorMsg = "Postcode format is invalid for your country.";
					break;
				case "password":
					errorMsg +=
						"Password must be between 8 and 64 characters and contain at least one uppercase letter, one lowercase letter, and one special character.";
					break;
				case "confirmPassword":
					errorMsg += "Passwords don't match.";
					break;
			}
			target.setCustomValidity(errorMsg);
			target.reportValidity();
		}
	}
});