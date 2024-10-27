const products = [
    {
        productName: "Lemongrass and Honey Ointment",
        price: 5.99,
        stock: 20,
        imageUrl: "./images/products/pomada-hierbaluisa.jpeg"
    },
    {
        productName: "Eucalyptus Ointment",
        price: 6.50,
        stock: 15,
        imageUrl: "./images/products/pomada-hierbaluisa.jpeg"
    },
    {
        productName: "Oatmeal Ointment",
        price: 5.50,
        stock: 10,
        imageUrl: "./images/products/pomada-hierbaluisa.jpeg"
    },
    {
        productName: "Chamomile Soap",
        price: 4.25,
        stock: 30,
        imageUrl: "./images/products/pomada-hierbaluisa.jpeg"
    },
    {
        productName: "Oatmeal and Honey Soap",
        price: 4.75,
        stock: 25,
        imageUrl: "./images/products/pomada-hierbaluisa.jpeg"
    },
    {
        productName: "Eucalyptus Soap",
        price: 4.00,
        stock: 20,
        imageUrl:"./images/products/pomada-hierbaluisa.jpeg"
    },
    {
        productName: "Red Fruits Soap",
        price: 4.50,
        stock: 18,
        imageUrl: "./images/products/pomada-hierbaluisa.jpeg"
    },
    {
        productName: "Moisturizing Lip Balm",
        price: 3.99,
        stock: 40,
        imageUrl: "./images/products/pomada-hierbaluisa.jpeg"
    }
];

function loadProductsIntoForm() {
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.productName;
        option.textContent = product.productName;
        productSelect.appendChild(option);
    });
}

document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const modal = document.getElementById("success-modal");
    modal.style.display = "block";
});


document.querySelector(".close-button").addEventListener("click", function() {
    const modal = document.getElementById("success-modal");
    modal.style.display = "none";
});


window.addEventListener("click", function(event) {
    const modal = document.getElementById("success-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


loadProductsIntoForm();