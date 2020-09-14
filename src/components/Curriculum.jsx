import React from 'react'
import Curriculum from './../Curriculum/Curriculum_Academia_Geek_Desarrollo.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../styles/Curriculum.css';

const Cv=()=>{

    return (
        <div id="Container-CV">
            
            
            <div id="Container-pdf">
           


                <a id="curriculum" className='links-Cv' href={Curriculum} download="Curriculum_Academia_Geek_Desarrollo.pdf">
                <FontAwesomeIcon className='iconos'/>Presiona aquí para descargar curriculum vitae</a>
            </div>
            
            
        </div>
    )
}

export default Cv;