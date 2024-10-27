
//current year in footer
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} | Nature Comestic | Quito-Ecuador`;

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



