import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";

let ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}  className="toggle-btn">
            Toggle
        </button>
    );
}

export default ThemeToggle;
