document.addEventListener("DOMContentLoaded", () => {
  const totalEl = document.getElementById("total");
  const itemsContainer = document.getElementById("items");
  const addForm = document.getElementById("add-form");

  let total = 0;

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const price = parseInt(document.getElementById("price").value, 10);

    if (!name || !price || price <= 0) {
      alert("請輸入項目名稱及正確金額！");
      return;
    }

    // 新增一筆項目
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
      <span>${name} - $${price}</span>
      <button class="delete">刪除</button>
    `;

    // 刪除功能
    item.querySelector(".delete").addEventListener("click", () => {
      itemsContainer.removeChild(item);
      total -= price;
      totalEl.textContent = total;
    });

    itemsContainer.appendChild(item);

    total += price;
    totalEl.textContent = total;

    // 清空輸入
    addForm.reset();
  });
});
