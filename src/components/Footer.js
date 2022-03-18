import React, { useState, useEffect } from "react"

const Footer = () => {

    return (
        <div className="footer" id="footer"> 
            <h2 className="line-color">Bye</h2>
            <div className="footer-container">
                <div className="bye-container" style={{left: "-100px"}}>
                    <p className="bye-bubble calico-bubble">See ya</p>
                    <img src="/website/images/calico.png" className="bye-calico"></img>
                </div>
                <div className="bye-container" style={{left: "400px"}}>
                    <p className="bye-bubble orange-bubble">Au Revoir</p>
                    <img src="/website/images/orange.png" className="bye-orange"></img>
                </div>
                <div className="bye-container" style={{left: "600px"}}>
                    <p className="bye-bubble siamese-bubble">拜拜</p>
                    <img src="/website/images/siamese.png" className="bye-siamese"></img>
                </div>
                <div className="bye-container" style={{left: "800px"}}>
                    <p className="bye-bubble black-bubble">Good bye!</p>
                    <img src="/website/images/black.png" className="bye-black"></img>
                </div>
                <div className="bye-container" style={{left: "200px"}}>
                    <p className="bye-bubble tabby-bubble">Bonne <br></br>Journée</p>
                    <img src="/website/images/tabby.png" className="bye-tabby"></img>
                </div>
                <div className="bye-container" style={{left: "10px"}}>
                    <p className="bye-bubble white-bubble">再見</p>
                    <img src="/website/images/white.png" className="bye-white"></img>
                </div>

                
                </div>
        </div>
    )
}

export default Footer