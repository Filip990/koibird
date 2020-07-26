import data from "../../data.json";

window.addEventListener("load", function () {
	const container = document.getElementById("category-container");

	container.innerHTML = data.categories.reduce(
		(acc, item) => acc + createCategory(item),
		""
	);
});

function createCategory(item) {
	return `
    <div style="background-image: url(&quot;${item.image}&quot;);">
      <p>${item.name}</p>
      <span class="view-category">shop now &gt;</span>
    </div>
  `;
}
