import React from 'react';
import Header from './Header.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import ProjectsComponent from './projects/ProjectsComponent.jsx'
import HabilitiesComponent from './habilities/HabilitiesComponent.jsx'
import '../styles/Content.css';
import Curriculum from './Curriculum.jsx';


const Content = () => {

    return ( 
        <div id="home-container" className="content-fluid font">    
            <Header 
            />
            <main>
                <div id="title-initial" className="title" >
                    <span id="welcome" className="texto" style={{color: '#fff'}}>Hola, soy Juan Camilo Castañeda. <br/>
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
                <div>
                    <Curriculum/>
                </div>
            </main>
            <footer className="color-d information">
                <p className="text-center text-light">Derechos reservados &copy; Copyright- Juan Castañeda </p>
            </footer>
        </div>
     );
}
 
export default Content;