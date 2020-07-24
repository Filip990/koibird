import data from "../../data.json";
import buildSlider from "../../sliderBuilder";

const newInStock = data.newInStock.map((item) => item);

window.addEventListener("load", function () {
	buildSlider("cards-container", newInStock);
});
