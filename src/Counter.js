import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    function increment() {
        dispatch({ type: 'INCREMENT' });
    }

    function decrement() {
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <div>
            <div>Redux Counter</div>
            <div>Count: {count}</div>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </div>
    );
}

export default Counter;