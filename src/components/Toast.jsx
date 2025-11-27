import { useEffect } from "react";

export default function Toast({ type = "info", message, onClose, timeout = 4000 }) {
    useEffect(() => {
        if (!message) return;
        const id = setTimeout(onClose, timeout);
        return () => clearTimeout(id);
    }, [message, onClose, timeout]);

    if (!message) return null;
    return (
        <div className={`toast toast--${type}`} role="alert">
        <span>{message}</span>
        <button onClick={onClose} aria-label="Cerrar">×</button>
        </div>
    );
}