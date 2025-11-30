let cart = [];
let total = 0;

function addItem(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cart");
    const totalDisplay = document.getElementById("total");

    list.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        list.appendChild(li);
    });

    totalDisplay.textContent = total;
}

function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}
