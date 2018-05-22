import './app.css';

// Import the `combineReducers` method
import { createStore, combineReducers } from 'redux';

const initialCartState = {
    items: [],
    amount: 0,
}

const initialProductsState = {
    items: [],
};

// Create two reducers
function cartReducer(state = initialCartState, action) {
    let newState;

    if (action.type === 'ADD_ITEM_TO_CART') {
        newState = {
            ...state,
            items: [...state.items, action.item],
            amount: state.amount + action.item.price,
        }
    } else {
        newState = state;
    }

    return newState;
}

function productsReducer(state = initialProductsState, action) {
    let newState;

    if (action.type === 'ADD_ITEM') {
        newState = {
            ...state,
            items: [...state.items, action.item],
        }
    } else {
        newState = state;
    }

    return newState;
}

// Combine the reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    product: productsReducer,
});

// Create the store using the combined reducer
const store = createStore(rootReducer);

// store.getState()
console.log("========= Store ========");
console.log(store.getState());

// store.subscribe() to subscribe to store updates.
store.subscribe(function () {
    console.log("======== Store updated ========");
    console.log(store.getState());
});

function addItemToCart(item) {
    return {
        type: 'ADD_ITEM_TO_CART',
        item,
    }
}

// Update the actions to an action creator
store.dispatch(addItemToCart({
    name: 'Oneplus 6',
    price: 34000
}));

store.dispatch(addItemToCart({
    name: 'Samsung s9',
    price: 64000
}));