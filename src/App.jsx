import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";

function App() {
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
              image="/images/pythoned.png"
              title="HTML 5"
              description="Estructuración semántica y moderna."
              badge="Diseño responsivo"
            />

            <Card
              image="/images/pythoned.png"
              title="CSS"
              description="Estilos modernos y adaptables."
              badge="UI Moderna"
            />

            <Card
              image="/images/pythoned.png"
              title="Canva"
              description="Diseño gráfico intuitivo."
              badge="Contenido visual"
            />

            <Card
              image="/images/pythoned.svg"
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
              title="Monitor Administrativo"
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
              image="/images/pythoned.png"
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
              image="/images/pyhtoned.png"
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
                <img src="/images/gmail.svg" alt="Correo" />
              </a>

              <a
                href="https://www.linkedin.com/in/alejandro-escobar-15159b270"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>

              <a href="https://github.com/Elrojizo17" target="_blank" rel="noreferrer">
                <img src="/images/github.png" alt="GitHub" />
              </a>
            </div>
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
