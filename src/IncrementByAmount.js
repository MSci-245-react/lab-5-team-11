
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from '/workspaces/lab-5-team-11/src/features/counter/counterSlice.js'; 

export function IncrementByAmount() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('');

  const addValue = Number(incrementAmount) || 0;

  const handleIncrement = () => {
    dispatch(incrementByAmount(addValue));
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleIncrement}>Increment by Amount</button>
    </div>
  );
}
