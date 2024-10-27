const products = [
    {
        productName: "Lemongrass and Honey Ointment",
        price: 5.99,
        stock: 20,
        imageUrl: "./images/products/pomada-hierbaluisa.webp"
    },
    {
        productName: "Eucalyptus Ointment",
        price: 6.50,
        stock: 15,
        imageUrl: "./images/products/pomada-eucalipto.webp"
    },
    {
        productName: "Oatmeal Ointment",
        price: 5.50,
        stock: 10,
        imageUrl: "./images/products/pomada-avena.webp"
    },
    {
        productName: "Chamomile Soap",
        price: 4.25,
        stock: 30,
        imageUrl: "./images/products/jabon-herbal.webp"
    },
    {
        productName: "Oatmeal and Honey Soap",
        price: 4.75,
        stock: 25,
        imageUrl: "./images/products/jabon-avena.webp"
    },
    {
        productName: "Eucalyptus Soap",
        price: 4.00,
        stock: 20,
        imageUrl: "./images/products/jabon-eucalipto.webp"
    },
    {
        productName: "Red Fruits Soap",
        price: 4.50,
        stock: 18,
        imageUrl: "./images/products/jabon-frutos.webp"
    },
    {
        productName: "Moisturizing Lip Balm",
        price: 3.99,
        stock: 40,
        imageUrl: "./images/products/labial-humectante.webp"
    }
];

function createProductCards(products) {
    const galleryContainer = document.querySelector(".products-gallery");
    galleryContainer.innerHTML = '';

    products.forEach(product => {
        let card = document.createElement("div");
        card.classList.add("product-card");

        let name = document.createElement("h3");
        let price = document.createElement("p");
        let stock = document.createElement("p");
        let img = document.createElement("img");
        let button = document.createElement("button");

        name.textContent = product.productName;
        price.innerHTML = `<span class="label">Price: </span> $${product.price.toFixed(2)}`;
        stock.innerHTML = `<span class="label">Stock: </span> ${product.stock}`;
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.productName}`);
        img.setAttribute("loading", "lazy");
        button.textContent = "Add to Cart";
        button.classList.add("add-to-cart");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(stock);
        card.appendChild(button);

        galleryContainer.appendChild(card);
    });
}

function sortByPrice(order) {
    const sortedProducts = [...products].sort((a, b) => {
        return order === "low-to-high" ? a.price - b.price : b.price - a.price;
    });
    createProductCards(sortedProducts);
}

function sortAlphabetically(order) {
    const sortedProducts = [...products].sort((a, b) => {
        return order === "a-to-z" ? a.productName.localeCompare(b.productName) : b.productName.localeCompare(a.productName);
    });
    createProductCards(sortedProducts);
}

document.getElementById("sort-price").addEventListener("change", (event) => {
    sortByPrice(event.target.value);
});

document.getElementById("sort-alphabetical").addEventListener("change", (event) => {
    sortAlphabetically(event.target.value);
});

createProductCards(products);





// ----------------------------------

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    openCartModal();
}


function showCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    cartItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemDiv);
    });
}

function openCartModal() {
    document.getElementById("cart-modal").style.display = "block";
    showCart();
}


function closeCartModal() {
    document.getElementById("cart-modal").style.display = "none";
}


function clearCart() {
    localStorage.removeItem("cart");
    showCart();
}

document.getElementById("cart-btn").addEventListener("click", openCartModal);
document.querySelector(".close").addEventListener("click", closeCartModal);
document.getElementById("clear-cart").addEventListener("click", clearCart);

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        const productCard = event.target.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;
        const price = parseFloat(productCard.querySelector("p").textContent.replace(/[^0-9.-]+/g, ""));
        addToCart({ productName, price });
    }
});