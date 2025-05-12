import React from 'react';
import Header from './Header';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Header /> {/* BUG: Missing props >>>>> it is missing //title="my react app"// */} 
      <Counter />
    </div>
  );
}

export default App;
