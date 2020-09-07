import React from 'react'
import Curriculum from './../Curriculum/Curriculum_Academia_Geek_Desarrollo.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../styles/Curriculum.css';

const Cv=()=>{

    return (
        <div id="Container-CV">
            
            
            <div id="Container-pdf">
                <p>Da click en el siguiente enlace para su descarga.</p>
                <a className='links-Cv' href={Curriculum} download="Curriculum_Academia_Geek_Desarrollo.pdf">
                <FontAwesomeIcon className='iconos' icon={['fab', 'buffer']} />Descargar aquí Curriculum vitae Juan Camilo Castañeda</a>
            </div>
            
            
        </div>
    )
}

export default Cv;