// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Add event listeners to each small image beneath the main product image
// document.querySelectorAll(".small-image").forEach((img) => {
//   img.addEventListener("click", () => {
//     const item = {
//       name: document.querySelector(".single-pro-details h4").innerText,
//       price: parseFloat(
//         document
//           .querySelector(".single-pro-details h2")
//           .innerText.replace("$", "")
//       ),
//       quantity: parseInt(
//         document.querySelector('.single-pro-details input[type="number"]').value
//       ),
//       image: img.src, // Set the image to the small image that was clicked
//     };
//     addToCart(item);
//   });
// });

// // Add to Cart functionality with notification
// function addToCart(item) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const existingItemIndex = cart.findIndex(
//     (cartItem) => cartItem.name === item.name && cartItem.image === item.image
//   );
//   if (existingItemIndex > -1) {
//     cart[existingItemIndex].quantity += item.quantity;
//   } else {
//     cart.push(item);
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartPage();
// }

// // Function to update the cart page
// function updateCartPage() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartTable = document.querySelector("#cart tbody");
//   cartTable.innerHTML = ""; // Clear the table before updating

//   let total = 0;

//   cart.forEach((item, index) => {
//     const itemSubtotal = (item.price * item.quantity).toFixed(2);
//     total += parseFloat(itemSubtotal);

//     const row = `<tr>
//           <td><a href="#" onclick="removeItem(${index})"><i class="fa-regular fa-circle-xmark"></i></a></td>
//           <td><img src="${item.image}" alt="" /></td>
//           <td>${item.name}</td>
//           <td>$${item.price.toFixed(2)}</td>
//           <td><input type="number" value="${
//             item.quantity
//           }" onchange="updateQuantity(${index}, this.value)" /></td>
//           <td>$${itemSubtotal}</td>
//       </tr>`;
//     cartTable.insertAdjacentHTML("beforeend", row);
//   });

//   document
//     .querySelector("#subtotal")
//     .querySelectorAll("td")[1].innerText = `$${total.toFixed(2)}`;
//   document
//     .querySelector("#subtotal")
//     .querySelectorAll("tr")[2]
//     .querySelectorAll("td")[1].innerText = `$${total.toFixed(2)}`;
// }

// // Update item quantity and subtotal on the cart page
// function updateQuantity(index, quantity) {
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   cart[index].quantity = parseInt(quantity);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartPage();
// }

// // Remove an item from the cart
// function removeItem(index) {
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartPage();
// }

// // Initialize the cart page when loaded
// window.onload = updateCartPage;

// 88888888888888888888888888888888888888888888888888888888888888888888
// // Add event listener for 'Add to Cart' button
// document.querySelector(".normal").addEventListener("click", () => {
//   const item = {
//     name: document.querySelector(".single-pro-details h4").innerText,
//     price: parseFloat(
//       document
//         .querySelector(".single-pro-details h2")
//         .innerText.replace("$", "")
//     ),
//     quantity: parseInt(
//       document.querySelector('.single-pro-details input[type="number"]').value
//     ),
//     image: document.getElementById("mainImg").src,
//   };
//   addToCart(item);
// });

// // Function to add items to the cart (localStorage)
// function addToCart(item) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const existingItemIndex = cart.findIndex(
//     (cartItem) => cartItem.name === item.name
//   );
//   if (existingItemIndex > -1) {
//     cart[existingItemIndex].quantity += item.quantity;
//   } else {
//     cart.push(item);
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartPage();
// }

// // Function to update the cart page
// function updateCartPage() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartTable = document.querySelector("#cart tbody");
//   cartTable.innerHTML = ""; // Clear the table before updating

//   let total = 0;

//   cart.forEach((item, index) => {
//     const itemSubtotal = (item.price * item.quantity).toFixed(2);
//     total += parseFloat(itemSubtotal);

//     const row = `<tr>
//           <td><a href="#" onclick="removeItem(${index})"><i class="fa-regular fa-circle-xmark"></i></a></td>
//           <td><img src="${item.image}" alt="" /></td>
//           <td>${item.name}</td>
//           <td>$${item.price.toFixed(2)}</td>
//           <td><input type="number" value="${
//             item.quantity
//           }" onchange="updateQuantity(${index}, this.value)" /></td>
//           <td>$${itemSubtotal}</td>
//       </tr>`;
//     cartTable.insertAdjacentHTML("beforeend", row);
//   });

//   document
//     .querySelector("#subtotal")
//     .querySelectorAll("td")[1].innerText = `$${total.toFixed(2)}`;
//   document
//     .querySelector("#subtotal")
//     .querySelectorAll("tr")[2]
//     .querySelectorAll("td")[1].innerText = `$${total.toFixed(2)}`;
// }

// // Update item quantity and subtotal on the cart page
// function updateQuantity(index, quantity) {
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   cart[index].quantity = parseInt(quantity);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartPage();
// }

// // Remove an item from the cart
// function removeItem(index) {
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartPage();
// }

// // Initialize the cart page when loaded
// window.onload = updateCartPage;

// 888888888888888888888888888888888888888888888888888

// Add event listeners to each small image beneath the main product image
document.querySelectorAll(".small-image").forEach((img) => {
  img.addEventListener("click", () => {
    const item = {
      name: document.querySelector(".single-pro-details h4").innerText,
      price: parseFloat(
        document
          .querySelector(".single-pro-details h2")
          .innerText.replace("$", "")
      ),
      quantity: parseInt(
        document.querySelector('.single-pro-details input[type="number"]').value
      ),
      image: img.src, // Set the image to the small image that was clicked
    };
    addToCart(item);
  });
});

// Add event listener for 'Add to Cart' button for the main image
document.querySelector(".normal").addEventListener("click", () => {
  const item = {
    name: document.querySelector(".single-pro-details h4").innerText,
    price: parseFloat(
      document
        .querySelector(".single-pro-details h2")
        .innerText.replace("$", "")
    ),
    quantity: parseInt(
      document.querySelector('.single-pro-details input[type="number"]').value
    ),
    image: document.getElementById("mainImg").src,
  };
  addToCart(item);
});

// Function to add items to the cart (localStorage)
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.name === item.name && cartItem.image === item.image
  );
  if (existingItemIndex > -1) {
    // If the item with the same name and image already exists, update the quantity
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    // Otherwise, add the new item to the cart
    cart.push(item);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartPage();
}

// Function to update the cart page
function updateCartPage() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTable = document.querySelector("#cart tbody");
  cartTable.innerHTML = ""; // Clear the table before updating

  let total = 0;

  cart.forEach((item, index) => {
    const itemSubtotal = (item.price * item.quantity).toFixed(2);
    total += parseFloat(itemSubtotal);

    const row = `<tr>
          <td><a href="#" onclick="removeItem(${index})"><i class="fa-regular fa-circle-xmark"></i></a></td>
          <td><img src="${item.image}" alt="" /></td>
          <td>${item.name}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td><input type="number" value="${
            item.quantity
          }" onchange="updateQuantity(${index}, this.value)" /></td>
          <td>$${itemSubtotal}</td>
      </tr>`;
    cartTable.insertAdjacentHTML("beforeend", row);
  });

  document
    .querySelector("#subtotal")
    .querySelectorAll("td")[1].innerText = `$${total.toFixed(2)}`;
  document
    .querySelector("#subtotal")
    .querySelectorAll("tr")[2]
    .querySelectorAll("td")[1].innerText = `$${total.toFixed(2)}`;
}

// Update item quantity and subtotal on the cart page
function updateQuantity(index, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].quantity = parseInt(quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartPage();
}

// Remove an item from the cart
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartPage();
}

// Initialize the cart page when loaded
window.onload = updateCartPage;
