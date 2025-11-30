let selectedItem = null;
let cart = [];
let total = 0;

function selectItem(name, price) {
    selectedItem = { name, price };
}

function addToCart() {
    if (!selectedItem) return alert("請先選擇商品");

    const qty = Number(document.getElementById("qty").value);
    if (qty <= 0) return alert("數量不能為 0");

    const note = document.getElementById("note").value;
    const itemTotal = selectedItem.price * qty;

    cart.push({
        name: selectedItem.name,
        qty,
        note,
        itemTotal
    });

    total += itemTotal;

    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent =
            `${item.name} x ${item.qty} = $${item.itemTotal.toFixed(2)} ` +
            (item.note ? `（備註：${item.note}）` : "");
        cartList.appendChild(li);
    });

    document.getElementById("total").textContent = total.toFixed(2);
}

function clearCart() {
    cart = [];
    total = 0;
    updateCartUI();
}
