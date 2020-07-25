import data from "../../data.json";
import buildSlider from "../../sliderBuilder/sliderBuilder";

const newInStock = data.newInStock.map((item) => item);

window.addEventListener("load", function () {
	const sliderContainer = document.getElementById("collection-slider");
	buildSlider(sliderContainer, newInStock);
});
