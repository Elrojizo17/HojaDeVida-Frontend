import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";
import { useState } from "react";
import { motion } from "framer-motion";
import Toast from "./components/Toast";
import BackToTop from "./components/BackToTop";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://hojadevida-backend.onrender.com";
const SOLICITUDES_ENDPOINT = `${API_BASE_URL}/solicitudes`;

function App() {
  const [form, setForm] = useState({ nombre: "", correo: "", descripcion: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ type: null, message: null });

  const setToastMsg = (type, message) => setToast({ type, message });

  const validators = {
    nombre: v => v.trim().length >= 3 || "Mínimo 3 caracteres",
    correo: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Correo inválido",
    descripcion: v => v.trim().length >= 10 || "Mínimo 10 caracteres"
  };

  const validateField = (name, value) => {
    const rule = validators[name];
    if (!rule) return;
    const ok = rule(value);
    setFieldErrors(fe => ({ ...fe, [name]: ok === true ? null : ok }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    // Validación final
    Object.entries(form).forEach(([k, v]) => validateField(k, v));
    if (Object.values(fieldErrors).some(err => err)) {
      setToastMsg("error", "Corrige los campos.");
      return;
    }
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
          const mapped = {};
            data.errors.forEach(e => { mapped[e.path || e.param] = e.msg; });
          setFieldErrors(mapped);
          setToastMsg("error", "Validación fallida.");
        } else {
          setToastMsg("error", data?.error || "Error servidor.");
        }
      } else {
        setToastMsg("success", "Solicitud enviada.");
        setForm({ nombre: "", correo: "", descripcion: "" });
        setFieldErrors({});
      }
    } catch {
      setToastMsg("error", "No se pudo conectar.");
    } finally {
      setLoading(false);
    }
  };

  const fade = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: .55 } }
  };

  return (
    <>
      <Header avatar="/images/Davinson.png" />
      <main>
        <motion.section
          className="section"
          id="Perfil"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Section title="Perfil">
            <Card
              description="Estudiante de Desarrollo de Software, responsable y organizado, con habilidades en comunicación asertiva, trabajo en equipo y aprendizaje autónomo. Me adapto con facilidad a diferentes contextos y busco aportar al crecimiento organizacional mediante la aplicación de mis conocimientos y competencias."
            />
          </Section>
        </motion.section>

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
            <form onSubmit={handleSubmit} className="form" noValidate>
              <div className={`form__group ${fieldErrors.nombre ? "has-error" : ""}`}>
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  aria-invalid={!!fieldErrors.nombre}
                />
                {fieldErrors.nombre && <small className="error-msg">{fieldErrors.nombre}</small>}
              </div>

              <div className={`form__group ${fieldErrors.correo ? "has-error" : ""}`}>
                <label htmlFor="correo">Correo</label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  value={form.correo}
                  onChange={handleChange}
                  aria-invalid={!!fieldErrors.correo}
                />
                {fieldErrors.correo && <small className="error-msg">{fieldErrors.correo}</small>}
              </div>

              <div className={`form__group ${fieldErrors.descripcion ? "has-error" : ""}`}>
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows="4"
                  value={form.descripcion}
                  onChange={handleChange}
                  aria-invalid={!!fieldErrors.descripcion}
                />
                {fieldErrors.descripcion && <small className="error-msg">{fieldErrors.descripcion}</small>}
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </Card>
        </Section>
      </main>

      <footer className="site-footer">
        <small>© 2025 El Cartel De Jimmy</small>
      </footer>

      <Toast
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ type: null, message: null })}
      />
      <BackToTop />
    </>
  );
}

export default App;
