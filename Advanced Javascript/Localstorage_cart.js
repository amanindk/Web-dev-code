// Function to add item to cart
function addToCart(itemId) {
  // Get existing cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Add new item to cart if it's not already in the cart
  if (!cartItems.includes(itemId)) {
    cartItems.push(itemId);
  }

  // Save updated cart items back to localStorage
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // Update cart display
  displayCartItems();
}

// Function to display cart items
function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsList = document.getElementById("cartItems");

  // Clear previous items
  cartItemsList.innerHTML = "";

  // Add items to cart display
  cartItems.forEach((itemId) => {
    const listItem = document.createElement("li");
    listItem.textContent = itemId;
    cartItemsList.appendChild(listItem);
  });
}

// Display cart items when the page loads
window.addEventListener("load", displayCartItems);
