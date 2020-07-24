import data from "../../data.json";
import buildSlider from "../../sliderBuilder";

const bestSellers = data.bestSellers.map((item) => item);

window.addEventListener("load", function () {
	buildSlider("best-seller-card-container", bestSellers);
});
