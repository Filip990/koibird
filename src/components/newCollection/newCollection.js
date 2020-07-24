import data from "../../data.json";
import buildSlider from "../../sliderBuilder";

const newInStock = data.newInStock.map((item) => item);

window.onload = () => {
	buildSlider("cards-container", newInStock);
};
