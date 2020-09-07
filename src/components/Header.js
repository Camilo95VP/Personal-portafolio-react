import React from 'react';

const Header = ({icon}) => ( 
    <div className="fixed-top">
        <nav className="navbar navbar-expand-lg color-d">
            

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                        <a className="nav-link texto" href="#about">Acerca</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link texto" href="#project">Proyectos</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link texto" href="#abilities">Habilidades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link texto" href="#contact">Contacto</a>
                </li>
                </ul>
            </div>
            </nav>
    </div>
    
 )

 
export default Header;