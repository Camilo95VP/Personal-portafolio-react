import React from 'react';

import Header from './Header';
import About from './About';
import Contact from './Contact';
import ProjectsComponent from './projects/ProjectsComponent'
import HabilitiesComponent from './habilities/HabilitiesComponent'
import '../styles/Content.css';


const Content = () => {

    return ( 
        <div className="content-fluid font">    
            <Header 
            />
            <main>
                <div className="title" id="title-init">
                    <span className="texto" style={{color: '#fff'}}>Hola soy Juan Camilo Castañeda. <br/>
                    Desarrollador web Front-end</span>
                </div>
                <div className="container-fluid" id="about">
                <About />
                </div>
                <div className="projects container-fluid p-0 bg-light">
                    <hr className="m-0 line-hr" id="contact" />
                     <ProjectsComponent />
                    <hr className="m-0 line-hr" id="contact" />
                </div>
                <div className="abilities container-fluid bg-light p-0">
                    <HabilitiesComponent />
                    <hr className="m-0 line-hr" id="contact" />
                </div>
                <div className="container-fluid " >
                    <Contact/>   
                </div>
            </main>
            <footer className="color-d information">
                <p className="text-center text-light">Derechos reservados &copy; Copyright- Juan Castañeda </p>
            </footer>
        </div>
     );
}
 
export default Content;