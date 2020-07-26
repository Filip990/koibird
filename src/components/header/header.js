window.toggleMenu = () => {
	const x = document.getElementById("header-links");

	if (x.className === "topnav") {
		x.className += " visible";
	} else {
		x.className = "topnav";
	}
};
