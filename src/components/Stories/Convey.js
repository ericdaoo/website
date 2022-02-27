import React, { useState, useEffect } from "react"
import { BiXCircle } from "react-icons/bi"

const Convey = (props) => {


    return(
        <div className="overlay">
            <p style={{alignSelf: "flex-end",
                height: "1em",
                marginRight: "1em",
                fontSize: "1.5em",
                color: "white",
                cursor: "pointer",
                borderRadius: "50px",
                background: "black"
                }}
                
            onClick={() => props.exitButtonProps(props.keyProps)}
            >
                    <BiXCircle />
            </p>
            <div className="overlay-container">
            <h4 className="overlay-text">HOW CANDIDE WAS BROUGHT UP IN A MAGNIFICENT CASTLE, AND HOW HE WAS EXPELLED THENCE.</h4>
            <p className="overlay-text">CANDIDE
                    dljsaflkjadfdkl;
    

    </p>
            </div>
        </div>
    )   
}

export default Convey