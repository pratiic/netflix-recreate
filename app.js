let tabs = document.querySelectorAll(".tab-item");
let tabOne = document.querySelector("#tab-1");
let tabTwo = document.querySelector("#tab-2");
let tabThree = document.querySelector("#tab-3");

let tabContentOne = document.querySelector("#tab-1-content");
let tabContentTwo = document.querySelector("#tab-2-content");
let tabContentThree = document.querySelector("#tab-3-content");

tabOne.addEventListener("click", () => {
	tabOne.classList.add("tab-border");
	if (tabTwo.classList.contains("tab-border")) {
		tabTwo.classList.remove("tab-border");
	}
	if (tabThree.classList.contains("tab-border")) {
		tabThree.classList.remove("tab-border");
	}
});

tabTwo.addEventListener("click", () => {
	tabTwo.classList.add("tab-border");
	if (tabOne.classList.contains("tab-border")) {
		tabOne.classList.remove("tab-border");
	}
	if (tabThree.classList.contains("tab-border")) {
		tabThree.classList.remove("tab-border");
	}
});

tabThree.addEventListener("click", () => {
	tabThree.classList.add("tab-border");
	if (tabOne.classList.contains("tab-border")) {
		tabOne.classList.remove("tab-border");
	}
	if (tabTwo.classList.contains("tab-border")) {
		tabTwo.classList.remove("tab-border");
	}
});

tabOne.addEventListener("click", () => {
	tabContentOne.classList.add("show");
	if (tabContentTwo.classList.contains("show")) {
		tabContentTwo.classList.remove("show");
	}
	if (tabContentThree.classList.contains("show")) {
		tabContentThree.classList.remove("show");
	}
});

tabTwo.addEventListener("click", () => {
	tabContentTwo.classList.add("show");
	if (tabContentOne.classList.contains("show")) {
		tabContentOne.classList.remove("show");
	}
	if (tabContentThree.classList.contains("show")) {
		tabContentThree.classList.remove("show");
	}
});

tabThree.addEventListener("click", () => {
	tabContentThree.classList.add("show");
	if (tabContentOne.classList.contains("show")) {
		tabContentOne.classList.remove("show");
	}
	if (tabContentTwo.classList.contains("show")) {
		tabContentTwo.classList.remove("show");
	}
});
