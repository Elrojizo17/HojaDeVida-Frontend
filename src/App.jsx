// src/App.jsx
import { useState } from "react";

function App() {
  const [form, setForm] = useState({ nombre: "", correo: "", descripcion: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch(`${BACKEND}/solicitudes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setMsg("❌ Error: " + (data.error || data.message || "Algo falló"));
      } else {
        setMsg("✅ Solicitud enviada correctamente");
        setForm({ nombre: "", correo: "", descripcion: "" });
      }
    } catch (err) {
      setMsg("❌ Error de conexión con el servidor");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 700, margin: "auto" }}>
      <h1>Solicita un servicio</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required />
        <input name="correo" type="email" value={form.correo} onChange={handleChange} placeholder="Correo" required />
        <textarea name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Describe el servicio" required />
        <button type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar solicitud"}</button>
      </form>
      {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
    </div>
  );
}

export default App;
