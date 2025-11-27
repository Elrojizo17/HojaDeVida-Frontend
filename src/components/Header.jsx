import "../App.css";
import { useEffect, useState } from "react";

export default function Header({ avatar }) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") === "light" ? "light" : "dark"
    );

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <header className="site-header">
        <div className="left">
            <img className="avatar" src={avatar} alt="Perfil" />
            <h1>Hoja de Vida</h1>
        </div>
        <button
            className="theme-toggle"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label="Cambiar tema"
        >
            {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
        </header>
    );
}
