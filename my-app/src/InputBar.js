import React, { useState } from "react";

function InputBar() {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        title="input-component"
        value={input}
      />
    </div>
  );
}

export default InputBar;
