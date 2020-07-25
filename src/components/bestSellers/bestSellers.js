import data from "../../data.json";
import buildSlider from "../../sliderBuilder/sliderBuilder";

const bestSellers = data.bestSellers.map((item) => item);

window.addEventListener("load", function () {
	const sliderContainer = document.getElementById("best-seller-slider");
	buildSlider(sliderContainer, bestSellers);
});
