import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div data-testid="CounterDiv">{count}</div>
      <button onClick={() => setCount(count + 5)}>ADD</button>
      <button onClick={() => setCount(count - 5)}>REDUCE</button>
    </div>
  );
};
