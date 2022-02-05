import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='hello'>
      <button data-testid='counter-button'>{count}</button>
    </div>
  );
}
