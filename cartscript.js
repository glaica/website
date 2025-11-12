let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₱${item.price}`;
    li.style.cursor = "pointer";
    li.onclick = () => removeItem(index);
    cartItems.appendChild(li);
  });

  totalElement.textContent = `Total: ₱${total}`;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}
