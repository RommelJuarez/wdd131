
const products = [
    { id: 1, name: "Bread" },
    { id: 2, name: "Milk" },
    { id: 3, name: "Eggs" }
];


const productSelect = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


if (window.location.pathname.endsWith("review.html")) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.body.insertAdjacentHTML('afterbegin', `<p>You have submitted ${reviewCount} reviews.</p>`);
}

const yearElement=document.getElementById("currentyear");
const currentYear= new Date().getFullYear();
yearElement.textContent= `© ${currentYear} | Rommel Juarez | Quito-Ecuador`;

const lastModifiedElement=document.getElementById("lastModified");
const lastModified= document.lastModified;
lastModifiedElement.textContent=`${lastModified}`;
