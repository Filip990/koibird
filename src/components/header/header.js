window.toggleMenu = () => {
	var x = document.getElementById("header-links");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
};
