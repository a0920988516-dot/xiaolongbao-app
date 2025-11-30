let total = 0;

function addItem(name, price) {
    const cart = document.getElementById("cart");
    const totalEl = document.getElementById("total");

    const li = document.createElement("li");
    li.textContent = `${name} - $${price}`;
    cart.appendChild(li);

    total += price;
    totalEl.textContent = total;
}
