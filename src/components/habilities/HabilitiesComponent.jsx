import React from 'react';
import bootstrapImg from '../../images/boostrapp.png'
import cssImg from '../../images/csss.png'
import gitImg from '../../images/git.png'
import htmlImg from '../../images/htmll.png'
import javascriptImg from '../../images/JS.jpg'
import reactImg from '../../images/react.png'
import nodeImg from '../../images/node.png'



const HabilitiesComponent = () => {
    return ( 
        
        <div id="padre" className="row col-11 m-auto pt-4 justify-content-center">
            
            <div className="col-12 text-center">
                <h2 className="text-dark" id="abilities">Habilidades</h2>
                
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4 mb-4">
                <div className="card width-card">
                    <img src={htmlImg} className="img-cards-abilities" alt="" />
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4 mb-4">
                <div className="card width-card">
                    <img src={cssImg} className="img-cards-abilities" alt="" />
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4 mb-4">
                <div className="card width-card">
                    <img src={javascriptImg} className="img-cards-abilities" alt="" />
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4 mb-4">
                <div className="card width-card">
                    <img src={reactImg} className="img-cards-abilities" alt="" />
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4 mb-4">
                <div className="card width-card">
                    <img src={nodeImg} className="img-cards-abilities" alt="" />
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4 mb-4">
                <div className="card width-card">
                    <img src={bootstrapImg} className="img-cards-abilities" alt="" />
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4 mb-4">
                <div className="card width-card">
                    <img src={gitImg} className="img-cards-abilities" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default HabilitiesComponent;