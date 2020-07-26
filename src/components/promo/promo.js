import data from "../../data.json";

window.addEventListener("load", function () {
	const container = document.getElementById("promo-container");

	data.promo.forEach((item) => {
		const img = document.createElement("div");

		img.style.backgroundImage = `url(${item.image})`;

		container.appendChild(img);
	});
});
