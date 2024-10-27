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

let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
        img.setAttribute("alt", product.productName);
        img.setAttribute("loading", "lazy");
        button.textContent = "Add to Cart";
        button.classList.add("add-to-cart");

        button.addEventListener("click", () => {
            addToCart(product);
            showCartModal();
        });

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(stock);
        card.appendChild(button);
        galleryContainer.appendChild(card);
    });
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.productName === product.productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showCartModal() {
    const cartModal = document.getElementById("cart-modal1");
    const cartItemsContainer = document.getElementById("cart-items");
    
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `${item.productName} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsContainer.appendChild(itemElement);
    });

    cartModal.style.display = "block";
}

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("cart-modal1").style.display = "none";
});

document.getElementById("cart-btn").addEventListener("click", showCartModal);

document.getElementById("clear-cart").addEventListener("click", () => {
    cart = [];
    localStorage.removeItem('cart');
    document.getElementById("cart-items").innerHTML = '';
});

createProductCards(products);
