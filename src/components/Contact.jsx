import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Eating from '../../src/images/eating.gif';
import Eat from '../../src/images/eat.gif';








const Contact = () => ( 
    <div className={`row bg-color margin-contact`}>
        
        <div id="contenedor-padre" className="info-contact col-12 col-md-6 bg-light text-dark h3 d-flex justify-content-center flex-column m-0">
            
            <strong>Juan Castañeda</strong>
            <a href="/">camiloflstudio@gmail.com</a>
            <div className="row icons-contact">
                <div className="col-1">
                   <a href="https://www.linkedin.com/in/camilo-castro-744b861b2/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
                
                <div>
                    <img src={Eating} alt=""/>
                    <img src={Eat} alt=""/>
                </div>


                <div className="col-2">
                    <a href="https://github.com/Camilo95VP" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              
            </div>
        </div>  
    </div>
 )

 
export default Contact;