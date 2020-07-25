import "./sliderBuilder.scss";

function buildSlider(targetElement, data) {
	targetElement.innerHTML = createSliderContainer();
	const cardsContainer = targetElement.querySelector(".cards-container");
	const [previousButton, nextButton] = targetElement.querySelectorAll(
		".nav-button"
	);

	let offset = 0;

	previousButton.addEventListener("click", () => {
		offset += 25;
		cardsContainer.style.transform = `translateX(${offset}%)`;
		handleDisableNavigation();
	});

	nextButton.addEventListener("click", () => {
		offset -= 25;
		cardsContainer.style.transform = `translateX(${offset}%)`;
		handleDisableNavigation();
	});

	function handleDisableNavigation() {
		previousButton.disabled = offset === 0;
		nextButton.disabled = Math.abs(offset) / 25 >= data.length - 4;
	}

	data.forEach((article) => {
		const card = createSliderCard(article);
		cardsContainer.innerHTML += card;
	});
}

function createSliderContainer() {
	return `
    <div class="slider-container">
      <button class="nav-button btn-prev" disabled>&lt;</button>
      <div class="cards-container">
      </div>
      <button class="nav-button btn-next">&gt;</button>
    </div>
  `;
}

function createSliderCard(cardData) {
	return `
    <div class="card">
      <img src="${cardData.image}">
      <p>${cardData.name}</p>
      <div>&#8356; ${cardData.price}</div>
      <button>Shop now</button>
    </div>
  `;
}

export default buildSlider;
