import './app.css';

// Import the `combineReducers` method
import { createStore } from 'redux';

const initialState = {
    items: [],
    amount: 0,
};

// Create two reducers

// Combine the reducers

// Create the store using the combined reducer
const store = createStore();

// store.getState()
console.log("========= Store ========");
console.log(store.getState());

// store.subscribe() to subscribe to store updates.
store.subscribe(function () {
    console.log("======== Store updated ========");
    console.log(store.getState());
});

// Update the actions to an action creator
store.dispatch({
    type: 'ADD_ITEM_TO_CART',
    item: {
        name: 'OnePlus 6',
        price: 34000,
    }
});

store.dispatch({
    type: 'ADD_ITEM_TO_CART',
    item: {
        name: 'Samsung s9',
        price: 64000,
    }
});