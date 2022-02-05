import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='hello'>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        data-testid='counter-button'
      >
        {count}
      </button>
    </div>
  );
}
