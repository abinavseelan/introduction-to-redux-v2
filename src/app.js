import './app.css';

// import createStore and combineReducers

const amountContainer = document.getElementById('amount');
const itemsContainer = document.getElementById('items');
const productContainer = document.getElementById('product-container');
const selectedContainer = document.getElementById('selected-container');

function updateItems(itemsContainer, items) {
    itemsContainer.innerHTML = '';

    itemsContainer.innerHTML = Object.keys(items).map(item => `
        <div>
            ${item}: ${items[item]}
        </div>
    `);
}

// create action creators

// create reducers
const initialCartState = {
    items: {
        burger: 0,
        pizza: 0,
    },
    amount: 0
};

const initialProductState = {
    selected: 0,
};

// combine reducers

// create store

// subscribe to the store and call updateItems()


productContainer.addEventListener('click', (event) => {
    const { action, item } = event.target.dataset;

    // dispatch add item action here
    // dispatch inc count action here
});