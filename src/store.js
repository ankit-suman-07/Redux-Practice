import { configureStore } from '@reduxjs/toolkit';

const initialState = { count: 0 };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;