let ProductName = document.getElementById("product-name");
let Category = document.getElementById("category");
let Quantity = document.getElementById("quantity");
let Price = document.getElementById("price");

let Table = document.getElementById("tbody");
let id = 0;

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    if (
        ProductName.value === "" ||
        Category.value === "" ||
        Quantity.value === "" ||
        Price.value === ""
    ) {
        alert("please fill all inputs");
        return;
    }

    let tr = document.createElement("tr");
    id++;

    tr.innerHTML = `
        <td>${id}</td>
        <td class="pname">${ProductName.value}</td>
        <td class="cat">${Category.value}</td>
        <td class="qty">${Quantity.value}</td>
        <td class="price">${Price.value}</td>
        <td class="total">${Price.value * Quantity.value}</td>
        <td><button class="upd">Update</button></td>
        <td><button class="del">Delete</button></td>
    `;

    Table.appendChild(tr);

    // UPDATE
    let updateBtn = tr.querySelector(".upd");

    updateBtn.addEventListener("click", () => {

        let newName = prompt("Product name", tr.querySelector(".pname").innerText);
        let newCat = prompt("Category", tr.querySelector(".cat").innerText);
        let newQty = prompt("Quantity", tr.querySelector(".qty").innerText);
        let newPrice = prompt("Price", tr.querySelector(".price").innerText);

        if (newName && newCat && newQty && newPrice) {
            tr.querySelector(".pname").innerText = newName;
            tr.querySelector(".cat").innerText = newCat;
            tr.querySelector(".qty").innerText = newQty;
            tr.querySelector(".price").innerText = newPrice;
            tr.querySelector(".total").innerText = newQty * newPrice;
        }
    });

    // DELETE
    let deleteBtn = tr.querySelector(".del");

    deleteBtn.addEventListener("click", () => {
        tr.remove();
    });

    // clear inputs
    ProductName.value = "";
    Category.value = "";
    Quantity.value = "";
    Price.value = "";
});