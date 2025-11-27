import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";
import { useState } from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://hojadevida-backend.onrender.com";

const SOLICITUDES_ENDPOINT = `${API_BASE_URL}/solicitudes`;

function App() {
  const [form, setForm] = useState({ nombre: "", correo: "", descripcion: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setMessage(null);
    setErrors([]);
    setLoading(true);

    try {
      const res = await fetch(SOLICITUDES_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 400 && Array.isArray(data.errors)) {
          setErrors(data.errors);
          setMessage("Revisa los campos del formulario.");
        } else {
          setMessage(data?.error || `Error (${res.status}).`);
        }
      } else {
        setMessage("Solicitud enviada correctamente.");
        setForm({ nombre: "", correo: "", descripcion: "" });
      }
    } catch (err) {
      setMessage("No se pudo conectar con el servidor.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header avatar="/images/Davinson.png" />

      <main>
        {/* Perfil */}
        <Section id="Perfil" title="Perfil">
          <Card
            description="Estudiante de Desarrollo de Software, responsable y organizado, con habilidades en comunicación asertiva, trabajo en equipo y aprendizaje autónomo. Me adapto con facilidad a diferentes contextos y busco aportar al crecimiento organizacional mediante la aplicación de mis conocimientos y competencias."
          />
        </Section>

        {/* Idiomas */}
        <Section id="Idiomas" title="Idiomas">
          <Card>
            <p>Español: Nativo</p>
            <p>Inglés: B2</p>
          </Card>
        </Section>

        {/* Herramientas */}
        <Section id="Herramientas" title="Herramientas">
          <div className="grid grid--cards">
            <Card
              image="/images/pythoned.png"
              title="Python"
              description="Lenguaje versátil y potente."
              badge="Desarrollo básico en Python 3"
            />

            <Card
              image="/images/html.png"
              title="HTML 5"
              description="Estructuración semántica y moderna."
              badge="Diseño responsivo"
            />

            <Card
              image="/images/css.png"
              title="CSS"
              description="Estilos modernos y adaptables."
              badge="UI Moderna"
            />

            <Card
              image="/images/canva.png"
              title="Canva"
              description="Diseño gráfico intuitivo."
              badge="Contenido visual"
            />

            <Card
              image="/images/postgre.png"
              title="PostgreSQL"
              description="Gestión de bases de datos."
              badge="Diseño y administración"
            />
          </div>
        </Section>

        {/* Experiencia */}
        <Section id="Experiencia" title="Experiencia">
          <div className="grid grid--cards">
            <Card
              image="/images/univalle.png"
              title="Auxiliar Administrativo"
              description="Apoyo en procesos administrativos y académicos."
              badge="Gestión"
            />

            <Card
              image="/images/redsi.png"
              title="RREDSI"
              description="Apoyo en logística y organización de eventos."
              badge="Logística"
            />

            <Card
              image="/images/eventos.png"
              title="Eventos"
              description="Coordinación y apoyo en eventos institucionales."
              badge="Organización"
            />
          </div>
        </Section>

        {/* Estudios */}
        <Section id="Estudios" title="Estudios">
          <div className="grid grid--cards">
            <Card
              image="/images/bolivariano.png"
              title="Bachiller Técnico"
              description="Graduado en 2022."
            />

            <Card
              image="/images/american.png"
              title="Curso de Inglés"
              description="Certificado nivel B2."
            />

            <Card
              image="/images/univalle.png"
              title="Desarrollo de Software"
              description="Actualmente en 6to semestre."
            />
          </div>
        </Section>

        {/* Contacto */}
        <Section id="Contacto" title="Contacto">
          <Card>
            <div className="perfil__images">
              <a href="https://wa.me/573146750350" target="_blank" rel="noreferrer">
                <img src="/images/whatsapp.png" alt="Whatsapp" />
              </a>

              <a href="mailto:alejandroescobard85@gmail.com">
                <img src="/images/gmail.png" alt="Correo" />
              </a>

              <a
                href="https://www.linkedin.com/in/alejandro-escobar-15159b270"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/lindekin.png" alt="LinkedIn" />
              </a>

              <a href="https://github.com/Elrojizo17" target="_blank" rel="noreferrer">
                <img src="/images/github.png" alt="GitHub" />
              </a>
            </div>
          </Card>
        </Section>

        {/* Solicitud de servicio */}
        <Section id="Solicitud" title="Solicitud de servicio">
          <Card>
            <form onSubmit={handleSubmit} className="form">
              <div className="form__group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="correo">Correo</label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  value={form.correo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows="4"
                  value={form.descripcion}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar solicitud"}
              </button>

              {message && <p className="form__message">{message}</p>}

              {errors.length > 0 && (
                <ul className="form__errors">
                  {errors.map((err, idx) => (
                    <li key={idx}>
                      {(err.path || err.param) ?? "campo"}: {err.msg || "inválido"}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </Card>
        </Section>
      </main>

      <footer className="site-footer">
        <small>© 2025 El Cartel De Jimmy</small>
      </footer>
    </>
  );
}

export default App;
