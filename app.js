const primaryNav = document.querySelector(".nav-bar");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
	const visibility = primaryNav.getAttribute("data-visible");

	if (visibility === "false") {
		primaryNav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else {
		primaryNav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
});

var acc = document.getElementsByClassName("accordion");
var i;

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		for (let j = 0; j < acc.length; j++) {
			if (j != i) {
				acc[j].nextElementSibling.style.maxHeight = null;
				acc[j].classList.remove("active");
			}
		}

		this.classList.toggle("active");
		var panel = this.nextElementSibling;

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

function errorMessage() {
	let message = document.getElementById("email");
	let text;

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(message.value)) {
		text = "";
		message.className = "";
	} else if (message.value == "") {
		text = "Whoops, make sure its an email";
		message.className = "color";
		document.getElementById("error").className = "color";
	} else {
		text = "Please provide a valid email address";
		message.className = "color";
		document.getElementById("error").className = "color";
	}
	document.getElementById("error").innerHTML = text;
}
