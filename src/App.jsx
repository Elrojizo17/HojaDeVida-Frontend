import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";

import avatar from "./assets/davinson.png";
import univalle from "./assets/univalle.png";
import bolivariano from "./assets/bolivariano.png";
import logoRedis from "./assets/logo-redis.png";
import whatsapp from "./assets/whatsapp.png";
import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";

function App() {
  return (
    <>
      <Header avatar={avatar} />

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
              image="https://quantumzeitgeist.com/wp-content/uploads/pythoned.png"
              title="Python"
              description="Lenguaje versátil y potente."
              badge="Desarrollo básico en Python 3"
            />

            <Card
              image="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              title="HTML 5"
              description="Estructuración semántica y moderna."
              badge="Diseño responsivo"
            />

            <Card
              image="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              title="CSS"
              description="Estilos modernos y adaptables."
              badge="UI Moderna"
            />

            <Card
              image="https://cdn-1.webcatalog.io/catalog/canva-cn/canva-cn-icon.png"
              title="Canva"
              description="Diseño gráfico intuitivo."
              badge="Contenido visual"
            />

            <Card
              image="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
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
              image={univalle}
              title="Monitor Administrativo"
              description="Apoyo en procesos administrativos y académicos."
              badge="Gestión"
            />

            <Card
              image={logoRedis}
              title="RREDSI"
              description="Apoyo en logística y organización de eventos."
              badge="Logística"
            />

            <Card
              image="https://cdn-icons-png.freepik.com/512/9353/9353735.png"
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
              image={bolivariano}
              title="Bachiller Técnico"
              description="Graduado en 2022."
            />

            <Card
              image="https://cancelar.com.co/wp-content/uploads/2022/09/ASW-cancelar-1.png"
              title="Curso de Inglés"
              description="Certificado nivel B2."
            />

            <Card
              image={univalle}
              title="Desarrollo de Software"
              description="Actualmente en 6to semestre."
            />
          </div>
        </Section>

        {/* Contacto */}
        <Section id="Contacto" title="Contacto">
          <Card>
            <div className="perfil__images">

              <a href="https://wa.me/573146750350" target="_blank">
                <img src={whatsapp} alt="Whatsapp" />
              </a>

              <a href="mailto:alejandroescobard85@gmail.com">
                <img src={gmail} alt="Correo" />
              </a>

              <a
                href="https://www.linkedin.com/in/alejandro-escobar-15159b270"
                target="_blank"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>

              <a href="https://github.com/Elrojizo17" target="_blank">
                <img src={github} alt="GitHub" />
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
