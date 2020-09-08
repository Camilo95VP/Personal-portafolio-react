import React from 'react';

const Header = () => ( 
    
    
    
    <div id="container" className="fixed-top">
        <nav id="nav-main" className="navbar navbar-expand-lg color-d">
      

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="nav-menu" className="navbar-nav mr-auto">
                <li className="nav-item">
                        <a id="texto"className="nav-link texto" href="#home-container">Home</a>
                </li>
                <li className="nav-item">
                        <a  id="texto" className="nav-link texto" href="#about">Acerca</a>
                </li>
                <li className="nav-item active">
                    <a id="texto" className="nav-link texto" href="#project">Proyectos</a>
                </li>
                <li className="nav-item active">
                    <a id="texto" className="nav-link texto" href="#abilities">Habilidades</a>
                </li>
                <li className="nav-item">
                    <a id="texto" className="nav-link texto" href="#contenedor-padre">Contacto</a>
                </li>
                </ul>
            </div>
            </nav>
    </div>
    
 )

 
export default Header;