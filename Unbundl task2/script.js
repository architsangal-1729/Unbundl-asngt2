let selectedChocolates = [];

function addToCart() {
    const selectElement = document.getElementById('chocolate-select');
    const quantityElement = document.getElementById('quantity');

    const selectedChocolate = selectElement.value;
    const quantity = parseInt(quantityElement.value);

    if (selectedChocolate && quantity > 0) {
        if (selectedChocolates.length < 8) {
            selectedChocolates.push({ chocolate: selectedChocolate, quantity });
            updateCart();
            updateTotalPrice();
        } else {
            alert('Maximum 8 items allowed in the custom pack.');
        }
    } else {
        alert('Please select a chocolate and quantity.');
    }
}

function updateCart() {
    const cartListElement = document.getElementById('cart-list');
    cartListElement.innerHTML = '';

    selectedChocolates.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.chocolate} - Quantity: ${item.quantity}`;
        cartListElement.appendChild(listItem);
    });
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    selectedChocolates.forEach(item => {
        // Update prices based on the selected chocolates
        switch (item.chocolate) {
            case 'dark':
                totalPrice += 100.00 * item.quantity;
                break;
            case 'milk':
                totalPrice += 80.00 * item.quantity;
                break;
            case 'white':
                totalPrice += 120.00 * item.quantity;
                break;
            case 'caramel':
                totalPrice += 150.00 * item.quantity;
                break;
            case 'hazelnut':
                totalPrice += 130.00 * item.quantity;
                break;
            // Add more cases as needed
        }
    });

    totalPriceElement.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
}

function updateCart() {
    const cartListElement = document.getElementById('cart-list');
    cartListElement.innerHTML = '';

    selectedChocolates.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.chocolate} - Quantity: ${item.quantity}`;
        cartListElement.appendChild(listItem);
    });
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    selectedChocolates.forEach(item => {
        // Update prices based on the selected chocolates
        switch (item.chocolate) {
            case 'dark':
                totalPrice += 100.00 * item.quantity;
                break;
            case 'milk':
                totalPrice += 80.00 * item.quantity;
                break;
            case 'white':
                totalPrice += 120.00 * item.quantity;
                break;
            case 'caramel':
                totalPrice += 150.00 * item.quantity;
                break;
            case 'hazelnut':
                totalPrice += 130.00 * item.quantity;
                break;
            // Add more cases as needed
        }
    });

    totalPriceElement.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
}

// Add the following code to update cart on initial load
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
    updateTotalPrice();
});