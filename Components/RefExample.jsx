import React, { useEffect, useRef } from "react";

function RefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Input Focus Example</h1>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default RefExample;
