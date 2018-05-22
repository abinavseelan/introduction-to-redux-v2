import './app.css';
import { combineReducers, createStore } from 'redux';

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
function updateAmount(amountContainer, amount) {
    amountContainer.innerHTML = `Rs. ${amount}`;
}

function updateSelected(selectedContainer, selected) {
    selectedContainer.innerHTML = selected;
}

function addItem(item) {
    return {
        type: 'ADD_ITEM',
        item,
    }
};

function removeItem(item) {
    return {
        type: 'REMOVE_ITEM',
        item,
    }
};

function inc() {
    return {
        type: 'INC_COUNT',
    }
};

function dec() {
    return {
        type: 'DEC_COUNT',
    }
};

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

function cartReducer(state = initialCartState, action) {
    let newState;

    if (action.type === 'ADD_ITEM') {
        newState = {
            ...state,
            items: {
                ...state.items,
                [action.item]: state.items[action.item] + 1,
            },
            amount: action.item === 'pizza' ? state.amount + 300 : state.amount + 150,
        };
    } else if (action.type === 'REMOVE_ITEM') {
        newState = {
            ...state,
            items: {
                ...state.items,
                [action.item]: state.items[action.item] - 1,
            },
            amount: action.item === 'pizza' ? state.amount - 300 : state.amount - 150,
        };
    } else {
        newState = state;
    }

    return newState;
}

function productReducer(state = initialProductState, action) {
    let newState;

    if (action.type === 'INC_COUNT') {
        newState = {
            ...state,
            selected: state.selected + 1,
        }
    } else if (action.type === 'DEC_COUNT') {
        newState = {
            ...state,
            selected: state.selected - 1,
        }
    } else {
        newState = state;
    }

    return newState;
}

// combine reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
})

// create store
const store = createStore(rootReducer);

// subscribe to the store and call updateItems()
store.subscribe(function () {
    updateItems(itemsContainer, store.getState().cart.items);
    updateAmount(amountContainer, store.getState().cart.amount);
    updateSelected(selectedContainer, store.getState().products.selected);
});

productContainer.addEventListener('click', (event) => {
    const { action, item } = event.target.dataset;

    // dispatch add item action here
    // dispatch inc count action here
    if (action === 'add') {
        store.dispatch(addItem(item));
        store.dispatch(inc());
    } else if (action === 'remove') {
        store.dispatch(removeItem(item));
        store.dispatch(dec());
    }
});