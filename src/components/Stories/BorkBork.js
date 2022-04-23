import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"
import { VscReferences } from "react-icons/vsc";
import tableau from "tableau-api"



 
const BorkBork = (props) => {

    const isDesktop = window.innerWidth > 1000 ? true : false

    const [ref, setRef] = useState(false)
    const [fade, setFade] = useState(0)

    const handleRef = () => {
        setRef(prevRef => !prevRef)
    }

    const elementRef = useRef();
    const elementRef2 = useRef();
    const elementRef3 = useRef();
    const elementRef4 = useRef();

    useEffect(() => {
        // initViz()
        console.log("test")
        document.documentElement.style.setProperty("--color-story", "rgb(101, 201, 255)")
    }, [])


    const options = {
        width: isDesktop ? "100%" : "100%",
        height: isDesktop ? "100%" : "100%",
        hideTabs: true
    }

    const options_b = {
        width: isDesktop ? "100%" : "100%",
        height: isDesktop ? "100%" : "100%",
        hideTabs: false
    }

 

    return (
        <div className="overlay">
            <div className="overlay-exit"
                onClick={() => props.exitButtonProps(props.keyProps)}
            >
                <BiXCircle />
            </div>
       

            <div className="overlay-container">

            <h2 className="overlay-text">Bork Bork</h2>

            <p className="overlay-subtle">Last Updated: 15/01/2021</p>
            <p className="overlay-subtle">10 min read</p>


            <div className="video-container">
                <div className="video-wraper">
                    <iframe className="youtube" src="https://www.youtube.com/embed/HpzD6vQUb4Y?autoplay=1&loop=1&mute=1&controls=1&showinfo=0&playlist=HpzD6vQUb4Y" title="YouTube video player" frameborder="0" autoPlay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

       

            <div className="overlay-quote-container">
                <h4 className="overlay-quote" style={{width:"500px"}}>It was nearing midnight and my classmate and I were rushing to code the finishing touches of our class’ final project. When suddenly, we hit a bug that brought our progress to a grinding halt. After nearly 30 minutes of going back and forth between Stack Overflow and debugging, I had discovered the issue. I looked at Ford and said “I accidentally hit "save as" on the file and the reason changes weren’t being seen when debugging for the past 30 minutes is because the changes were being saved to the wrong file 🫤🥴😅”</h4>
            </div>

            <h4 className="overlay-text">
                Inspiration 💡
            </h4>

            <p className="overlay-text">
            Something I thought a lot about during my time in Taiwan was how if I were a dog, I’d surely want to be a dog in Taiwan. The reason I thought about this frequently is because often times when going about my typical day in Taiwan, I’d encounter Taiwanese people treating their dogs in hilarious and overly coddled ways as if their dog were literally their child. I genuinely believe that I had seen more dogs being pushed in strollers than children being pushed in strollers in Taiwan. I’d often joke with friends suggesting that a tell tale sign of an aging population was this type of behavior. 
            </p>
            <p className="overlay-text">
            When my classmate and I were eventually tasked with a final project assignment involving designing a website that utilized a REST API with websecurity in mind, I knew we could distinguish our project from our peers by basing the website’s theme on this Taiwanese babying dogs phenomenon. 
            </p>


            <h4 className="overlay-text">
                Summary 📝
            </h4>
            <p className="overlay-text">
            
            </p>
            <p className="overlay-text">
            
            </p>
            

{/* 
            <h4 className="overlay-text">
                Full Thesis Text 📔
            </h4>
            <p className="overlay-text">
                Thesis can be viewed by clicking on the image below. Additional information about the thesis can be found via the <a href="https://etheses.lib.ntust.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dstdcdr&s=id=%22G0M10815809%22.&searchmode=basic&switchlang=en" target="_blank">National Taiwan University of Science and Technology E-thesis portal</a>.
            </p>
            <div class="overlay-tableau-container">
            <div className="overlay-text-visual-container">
                    <a href="https://drive.google.com/file/d/1K7GeS1mpqwpxy9cPdMAmzoVx1PH7aYMo/view?usp=sharing" target="_blank">
                    <img id="crisp" src="/website/images/thesis.png" style={{ width: isDesktop ? "400px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                    </a>
                    <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> A PDF of this master's thesis can be viewed via this<br></br><a href="https://drive.google.com/file/d/1K7GeS1mpqwpxy9cPdMAmzoVx1PH7aYMo/view?usp=sharing" target="_blank">google drive link</a>
                    </p>
                </div>
                </div> */}
                <p>
                    <br></br>
                    <br></br>
                    <br></br>
                </p>


            
            </div>
        </div >
    )
}

export default BorkBork