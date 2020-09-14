import React from 'react';
import photo from '../images/foto-perfil2.jpg'

const About = () => (
    <div id="about-container" className={`row bg-color height-about`}>
        
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <h1>Acerca</h1>
            <img className="img-profile" src={photo} alt="profile" />
        </div>
        <div className="info-contact d-flex justify-content-center flex-column col-12 col-md-6 bg-light text-dark h3 m-0">
            <p className="margin-p">Creativo y con capacidad de
            trabajo, integración y habilidad para
            enfrentar situaciones de desafío y
            superación en diferentes ambientes
            empresariales, apto para
            trabajar en equipo. 
            <br></br>
            <br></br>
            
            Mi objetivo
            principal como desarrollador de
            Software Front-End, es crear sitios y
            aplicaciones Web, partiendo de lo
            requerido por su empresa llevando a
            cabo ideas tangibles y funcionales.</p>

        </div>
    </div>
)

export default About;