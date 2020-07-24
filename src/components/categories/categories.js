import data from "../../data.json";

const categories = data.categories.map((category) => category);

window.addEventListener("load", function () {
	const container = document.getElementById("category-container");

	categories.forEach((category) => {
		const img = document.createElement("div");
		const name = document.createElement("p");
		const shopNow = document.createElement("span");

		name.innerHTML += category.name;
		shopNow.innerHTML += "shop now  &#x3e;";
		shopNow.className = "view-category";
		img.style.backgroundImage = `url(${category.image})`;

		img.append(name, shopNow);
		container.append(img);
	});
});
