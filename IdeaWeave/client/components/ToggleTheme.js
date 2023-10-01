import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';
import Head from "next/head";

const ToggleTheme = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            <Head>
                <link rel='stylesheet' href={`/css/${theme}.css`} />
            </Head>
            <span
                onClick={toggleTheme}
                style={{ fontSize: "24px", cursor: "pointer" }}
            >
                {theme === "light" ? "🌒" : "🌖"}
            </span>
        </>
    );
};

export default ToggleTheme;
