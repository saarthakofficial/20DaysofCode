let cart = [];

function addToCart(button) {
    let console = JSON.parse(button.getAttribute("data-console"));
    cart.push(console);
    updateCartTable();
  }

  function updateCartTable() {
    let tableBody = document.getElementById("cart-table-body");
    tableBody.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
      let row = document.createElement("tr");
      let nameCell = document.createElement("td");
      nameCell.innerHTML = cart[i].name;
      let priceCell = document.createElement("td");
      priceCell.innerHTML = cart[i].price;
      let deleteCell = document.createElement("td");
      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fa fa-times"></i>';
      deleteButton.classList.add("btn-delete");
      deleteButton.addEventListener("click", function() {
        removeFromCart(i);
      });
      deleteCell.appendChild(deleteButton);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(deleteCell);
      tableBody.appendChild(row);
      }
      }
  // update total price
  document.getElementById("total-price").innerHTML = "Total: $" + totalPrice;


function checkout() {
  // code to handle checkout process
  alert("Thank you for your purchase!");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartTable();
  }
