import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count++); // ❌ BUG: count++ returns the old value
    //to correct it >>   setCount(prev => prev + 1);

  };

  const decrement = () => {
    setCount(count--); // ❌ BUG: count-- returns the old value
    //pour couriger >>   setCount(prev => prev - 1);
 
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;
