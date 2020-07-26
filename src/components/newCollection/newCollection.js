import data from "../../data.json";
import buildSlider from "../../sliderBuilder/sliderBuilder";

window.addEventListener("load", function () {
	const sliderContainer = document.getElementById("collection-slider");
	buildSlider(sliderContainer, data.newInStock);
});
