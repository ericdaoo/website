import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"
import { VscReferences, VscGithub } from "react-icons/vsc"





const BorkBork = (props) => {

    const isDesktop = window.innerWidth > 1000 ? true : false


    document.documentElement.style.setProperty("--color-story", "rgb(101, 201, 255)")
    //not sure why only this component is having issues with changing the color story property on mobile


    useEffect(() => {
        document.documentElement.style.setProperty("--color-story", "rgb(101, 201, 255)")
    }, [])





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
                <p className="overlay-subtle">5 min read</p>
                <p className="overlay-subtle">Code on Github <a href="https://github.com/ericdaoo/borkbork_webservice_security_project" target="_blank" style={{color: "var(--color-story"}}>< VscGithub style={{ fontSize: "1.7em" }}/></a> </p>

                <div className="video-container">
                    <div className="video-wraper">
                        <iframe className="youtube" src="https://www.youtube.com/embed/HpzD6vQUb4Y?autoplay=1&loop=1&mute=1&controls=1&showinfo=0&playlist=HpzD6vQUb4Y" title="YouTube video player" frameborder="0" autoPlay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>



                <div className="overlay-quote-container">
                    <h4 className="overlay-quote" style={{ width: isDesktop ? "500px" : "100%" }}>It was nearing midnight and my classmate and I were rushing to code the finishing touches of our class’ final project. When suddenly, we hit a bug that brought our progress to a grinding halt. After nearly 30 minutes of going back and forth between Stack Overflow and debugging, I had discovered the issue. I looked at Ford and said “I accidentally hit "save as" on the file and the reason changes weren’t being seen when debugging for the past 30 minutes is because the changes were being saved to the wrong file”</h4>
                </div>

                <h4 className="overlay-text">
                    Inspiration 💡
                </h4>

                <p className="overlay-text">
                    Something I had thought a lot about during my time in Taiwan was how if I were a dog, I’d surely want to be a dog in Taiwan. The reason I thought about this frequently is because often times when going about my typical day in Taiwan, I’d encounter Taiwanese people treating their dogs in hilarious and overly coddled ways as if their dog were literally their child. I genuinely believe that I had seen more dogs being pushed in strollers than children being pushed in strollers in Taiwan. I’d often joke with friends suggesting that a tell tale sign of an aging population was this type of behavior.
                </p>
                <p className="overlay-text">
                    When my classmate and I were eventually tasked with a final project assignment involving designing a website, I knew we could distinguish our project from our peers by basing the website’s theme on this phenomenon of Taiwanese babying their dogs.
                </p>


                <h4 className="overlay-text">
                    Summary 📝
                </h4>
                <p className="overlay-text">
                    The main task of this project was to both design a unique website that utilized REST API web services and to configure proper mechanisms to ensure web service security. As mentioned earlier, the website created incorporated the theme of dogs in Taiwan. Specifically, users could visit our website to view and upload photo posts of dogs being treated in an overly coddled, adorable, and humorous way. Furthermore, as for the different security mechanisms incorporated, these included prevention of REST API abuse, malicious file uploads, unauthenticated login, SQL injections, and database takedowns.
                </p>

                <h4 className="overlay-text">
                    View Presenation  🖼
                </h4>
                <p className="overlay-text">
                    The presentation can be viewed by clicking the first image below. A demo video and key slides from the presentation are also displayed below.
                </p>


                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <a href="https://drive.google.com/file/d/1URXbhsHr8IfMEM1iHeTfPE0LsN4h4QeK/view?usp=sharing" target="_blank">
                            <img id="crisp" src="/website/images/BorkBork/borkbork.jpg" style={{ width: isDesktop ? "600px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        </a>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> This presentation can be viewed via this<br></br><a href="https://drive.google.com/file/d/1URXbhsHr8IfMEM1iHeTfPE0LsN4h4QeK/view?usp=sharing" target="_blank">Google Drive link</a>
                        </p>
                    </div>
                </div>

                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                    <video autoPlay muted controls loop ebkit-playsinline playsInline style={{ width: isDesktop ? "300px" : "80%", height: isDesktop ? "auto" : "auto" }}>
                        <source src="/website/images/BorkBork/borkbork.mp4" type="video/mp4"/>
                    </video>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> A video demo of the bork bork website
                        </p>
                    </div>
                </div>

                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                            <img id="crisp" src="/website/images/BorkBork/borkbork_setup.jpg" style={{ width: isDesktop ? "600px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> Website system environment and setup
                        </p>
                    </div>
                </div>

                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                            <img id="crisp" src="/website/images/BorkBork/borkbork_system_archtecture.jpg" style={{ width: isDesktop ? "600px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> Website system architecture
                        </p>
                    </div>
                </div>

                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                            <img id="crisp" src="/website/images/BorkBork/borkbork_sql_injection.jpg" style={{ width: isDesktop ? "1000px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> Demonstrating a typical SQL injection that returns all the table's rows
                        </p>
                    </div>
                </div>

                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                            <img id="crisp" src="/website/images/BorkBork/borkbork_sql_injection_2.jpg" style={{ width: isDesktop ? "1000px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> Preventing previous SQL injection by utilizing SQL escaper JavaScript Library
                        </p>
                    </div>
                </div>

                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                            <img id="crisp" src="/website/images/BorkBork/borkbork_sql_injection_3.jpg" style={{ width: isDesktop ? "1000px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> Utilizing placeholders to prevent direct database POST SQL query
                        </p>
                    </div>
                </div>


                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                    <video autoPlay muted controls loop playsInline style={{ width: isDesktop ? "1000px" : "100%", height: isDesktop ? "auto" : "auto" }}>
                        <source src="/website/images/BorkBork/borkbork_sql_prevention.mp4" type="video/mp4"/>
                    </video>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> Demonstrating how the website's backup SQL database is initiated if the main database is down
                        </p>
                    </div>
                </div>
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