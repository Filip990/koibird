export default function buildSlider(container, data) {
	const cardsContainer = document.getElementById(container);

	data.forEach((article) => {
		const card = document.createElement("div");
		const img = document.createElement("img");
		const name = document.createElement("p");
		const price = document.createElement("div");
		const btn = document.createElement("button");

		card.className = "card";
		btn.className = "shop-now";

		img.src = article.image;
		name.innerHTML += article.name;
		price.innerHTML += `&#8356; ${article.price}`;
		btn.innerHTML += "Shop now";

		card.append(img, name, price, btn);
		cardsContainer.appendChild(card);
	});
}
