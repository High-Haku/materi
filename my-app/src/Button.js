import React, { useState } from "react";

function Button() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    const change = theme === "light" ? "dark" : "light";
    setTheme(change);
  };
  return (
    <div>
      <button className="btn-theme" title="btn-theme" onClick={changeTheme}>
        Current Theme {theme}
      </button>
    </div>
  );
}

export default Button;
