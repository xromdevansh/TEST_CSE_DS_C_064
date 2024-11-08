const pricePerItem = 7990;
document.getElementById('quantity').addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = quantity * pricePerItem;
    document.querySelector('.total-price').textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
}
function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = quantity * pricePerItem;
    alert(`You added ${quantity} item(s) to your cart for ₹${totalPrice.toFixed(2)}.`);
}