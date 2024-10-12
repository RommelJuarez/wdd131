//current year in footer
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} | Rommel Juarez | Quito-Ecuador`;

const lastModifiedElement = document.getElementById("lastModified");
const lastModified = document.lastModified;
lastModifiedElement.textContent = `${lastModified}`;
//hamburguer menu

const hamButton = document.querySelector('#hamburger-btn');
const navigation = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//temples
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Quito Ecuador",
		location: "Quito, Ecuador",
		dedicated: "2022, November, 20",
		area: 27830,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/490df500d14611ec90efeeeeac1ee7e67e80c168/full/320%2C/0/default"
	},
	{
		templeName: "Guayaquil Ecuador",
		location: "Guayaquil, Ecuador",
		dedicated: "1999, August, 1",
		area: 70884,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/b6e397f7a6c219442a9987bcd8c92ff78c5d50a6/full/320%2C/0/default"
	}
];
// getting the buttons
const buttonOld = document.querySelector("#old");
const buttonNew = document.querySelector("#new");
const buttonLarge = document.querySelector("#large");
const buttonSmall = document.querySelector("#small");
const templeGallery = document.querySelector(".temple-gallery");
const buttonHome = document.querySelector("#home");

//click on button "Old"
buttonOld.addEventListener("click", () => {
	templeGallery.innerHTML = "";

	const templesBefore1900 = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(",")[0]);
		return year <= 1900;
	});
	createTemples(templesBefore1900);

});
// click on button "New"
buttonNew.addEventListener("click", () => {
	templeGallery.innerHTML = "";

	const templesAfter2000 = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(",")[0]);
		return year >= 2000;
	});
	createTemples(templesAfter2000);

});
//click on button "Large" temples larger than 90000 square feet
buttonLarge.addEventListener("click", () => {
	templeGallery.innerHTML = "";
	const area = temples.filter(temple => {
		const templeArea = temple.area;
		return templeArea >= 90000;
	});
	createTemples(area);

});
// click on button "Small" temples smaller than 10000 square feet
buttonSmall.addEventListener("click", () => {
	templeGallery.innerHTML = "";
	const area = temples.filter(temple => {
		const templeArea = temple.area;
		return templeArea <= 10000;
	});
	createTemples(area);
});
// click on button "Home"
buttonHome.addEventListener("click", () => {
	templeGallery.innerHTML = "";
	createTemples(temples);
});
function createTemples(filteredTemples) {
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let templeLocation = document.createElement("p");
		let dedicateDate = document.createElement("p");
		let templeArea = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		templeLocation.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
		dedicateDate.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
		templeArea.innerHTML = `<span class="label">Area: </span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(templeLocation);
		card.appendChild(dedicateDate);
		card.appendChild(templeArea);
		card.appendChild(img);

		document.querySelector(".temple-gallery").appendChild(card);


	});
};
createTemples(temples);