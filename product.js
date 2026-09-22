const products = {
    casual: {
        label: "CASUAL EDIT",
        name: "Everyday Essential Look",
        price: "₹2,499",
        image: "images/casual.jpg",
        description: "A relaxed everyday look curated with modern essentials for an effortless style."
    },

    party: {
        label: "PARTY EDIT",
        name: "Chic Evening Look",
        price: "₹3,499",
        image: "images/party.jpg",
        description: "A polished party look designed for an elegant and confident evening style."
    },

    modern: {
        label: "MODERN EDIT",
        name: "Modern Mood",
        price: "₹2,999",
        image: "images/bodycon.jpg",
        description: "A contemporary look combining clean silhouettes with a modern fashion mood."
    }
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products[productId];

if (product) {
    document.querySelector(".product-label").textContent = product.label;
    document.querySelector(".product-detail-info h1").textContent = product.name;
    document.querySelector(".product-price").textContent = product.price;
    document.querySelector(".product-description").textContent = product.description;

    document.querySelector(".product-detail-image img").src = product.image;
}
const sizeButtons = document.querySelectorAll(".sizes button");

sizeButtons.forEach(button => {
    button.addEventListener("click", () => {
        sizeButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});