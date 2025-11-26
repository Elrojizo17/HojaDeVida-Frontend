import "../App.css";

function Header({ avatar }) {
    return (
        <header className="site-header">
        <div className="left">
            <img src={avatar} alt="Foto de perfil" className="avatar" />
            <h1>David Alejandro Escobar García</h1>
        </div>

        <div className="right">
            <div className="dropdown">
            <div className="dropdown-selected">Menú</div>

            <ul className="dropdown-list">
                <li><a href="#Perfil">Perfil</a></li>
                <li><a href="#Idiomas">Idiomas</a></li>
                <li><a href="#Herramientas">Herramientas</a></li>
                <li><a href="#Experiencia">Experiencia</a></li>
                <li><a href="#Estudios">Estudios</a></li>
                <li><a href="#Contacto">Contacto</a></li>
            </ul>
            </div>
        </div>
        </header>
    );
}

export default Header;
