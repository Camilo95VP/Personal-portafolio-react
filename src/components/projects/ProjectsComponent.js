import React from 'react';
import pomodoroImg from '../../images/pomodoro.png';
import NASAImg from '../../images/NASA.png';
import fccImg from '../../images/FCC.png';
import pokedexImg from '../../images/pokemon.png';
import drumsImg from '../../images/Drums.png';
import documentImg from '../../images/ducument.png';
import calculatoreImg from '../../images/calculator.png';
import bankImg from '../../images/bank.png';
import surveyImg from '../../images/survey.png';
import markImg from '../../images/mark.png';
import randomqImg from '../../images/RandomQ.png';
import podcastImg from '../../images/podcast.png';


const ProjectsComponent = () => {
    return ( 
        <div className="row col-11 m-auto pt-4">
            <div className="col-12 text-center">
                <h2 className="text-dark" id="project">Proyectos</h2>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://camilo95vp.github.io/Fcc_js_proyects/index.html" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={fccImg} className="img-cards" alt="fcc projects" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Free Code Camp Projects</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://random-quote-machine-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={randomqImg} className="img-cards" alt="eduapp" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Random Quote Machine</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://drums-machine.vercel.app/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={drumsImg} className="img-cards" alt="gitinnova" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Drums Machine</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://markdown-previewer-eta.vercel.app/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={markImg} className="img-cards" alt="markdown" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Mark Down Previewer</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://javascript-calculator-olive.vercel.app/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={calculatoreImg} className="img-cards" alt="random" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Calculator</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://poke-api-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={pokedexImg} className="img-cards" alt="calculator" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Pokedex</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://pomodoro-clock-wheat.vercel.app/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={pomodoroImg} className="img-cards" alt="technical" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Pomodoro Clock</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://camilo95vp.github.io/Cajero_Virtual-/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={bankImg} className="img-cards" alt="survey" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Bank</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://camilo95vp.github.io/Tribute-Page/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={NASAImg} className="img-cards" alt="tribute" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Tribute Page</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://camilo95vp.github.io/TechnicalDocumentationPage/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={documentImg} className="img-cards" alt="palindrome" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Technical Documentation</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://camilo95vp.github.io/Survey-Form/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={surveyImg} className="img-cards" alt="portfolio" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Survey Form</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4">
                <a href="https://camilo95vp.github.io/PodCast/" target="_blank" rel="noopener noreferrer" className="a-style">
                    <div className="card bg-dark card-style">
                        <img src={podcastImg} className="img-cards" alt="portfolio" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Podcast Channel</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
     );
}
 
export default ProjectsComponent;