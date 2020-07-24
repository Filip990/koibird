import data from "../../data.json";

const promoImages = data.promo.map((img) => img);

window.addEventListener("load", function () {
	const container = document.getElementById("promo-container");

	promoImages.forEach((item) => {
		const img = document.createElement("div");

		img.style.backgroundImage = `url(${item.image})`;

		container.append(img);
	});
});
