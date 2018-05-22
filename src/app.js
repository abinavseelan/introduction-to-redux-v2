import './app.css';

// Import the `createStore` method
import { createStore } from 'redux';

const initialState = {
    items: [],
    amount: 0,
};

// Create a reducer
function reducer(state = initialState, action) {
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

// Create the store using the reducer
const store = createStore(reducer);

// store.getState()
console.log("========= Store ========");
console.log(store.getState());

// store.subscribe() to subscribe to store updates.
store.subscribe(function () {
    console.log("======== Store updated ========");
    console.log(store.getState());
});

// store.dispatch() can be used to dispatch an action
store.dispatch({
    type: 'ADD_ITEM_TO_CART',
    item: {
        name: 'OnePlus 6',
        price: 34000,
    }
});

// Maybe dispatch another action? :)

store.dispatch({
    type: 'ADD_ITEM_TO_CART',
    item: {
        name: 'Samsung s9',
        price: 64000,
    }
});