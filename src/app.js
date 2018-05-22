import './app.css';

// import createStore and combineReducers

const amountContainer = document.getElementById('amount');
const itemsContainer = document.getElementById('items');
const productContainer = document.getElementById('product-container');

productContainer.addEventListener('click', (event) => {
    const { action, item } = event.target.dataset;

    // dispatch add item action here
});

function updateItems(itemsContainer, items) {
    itemsContainer.innerHTML = '';

    itemsContainer.innerHTML = items.map(item => `
        <div>
            ${item.name}: ${item.quantity}
        </div>
    `);
}


// create reducers

// combine reducers

// create store

// subscribe to the store and call updateItems()