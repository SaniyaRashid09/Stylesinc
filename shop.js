const categoryButtons = document.querySelectorAll(".category");
const products = document.querySelectorAll(".product-card");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.textContent
            .trim()
            .toLowerCase();

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        products.forEach(product => {

            const categories = product.dataset.category
                .split(",")
                .map(category => category.trim());

            if (
                selectedCategory === "all" ||
                categories.includes(selectedCategory)
            ) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });

});