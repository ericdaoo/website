import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"




const MastersThesis = (props) => {

    const isDesktop = window.innerWidth > 1000 ? true : false

    document.documentElement.style.setProperty("--color-story", "rgb(255, 219, 185)")

    // useEffect(() => {
        
    // }, [])





    return (
        <div className="overlay">
            <div className="overlay-exit"
                onClick={() => props.exitButtonProps(props.keyProps)}
            >
                <BiXCircle />
            </div>


            <div className="overlay-container">

                <h2 className="overlay-text">Master's Thesis</h2>

                <p className="overlay-subtle">Last Updated: 16/06/2021</p>
                <p className="overlay-subtle">20 min read</p>

                <div className="video-container">
                    <div className="video-wraper">
                        <iframe className="youtube" src="https://www.youtube.com/embed/S73NM3N-dXY?autoplay=1&loop=1&mute=1&controls=1&showinfo=0&playlist=S73NM3N-dXY" title="YouTube video player" frameborder="0" autoPlay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>



                <div className="overlay-quote-container">
                    <h4 className="overlay-quote">I had suddenly realized that the thing that cybercriminals could not easily fake is whether the location of their operations are in fact being taken place within the country they are targeting</h4>
                </div>

                <h4 className="overlay-text">
                    Inspiration 💡
                </h4>

                <p className="overlay-text">
                    I remember the moment that I met my master's research advisor quite vividly. I had just arrived in Taiwan after having lived in Shanghai and first-hand witnessing how the Chinese government utilizes technology to suppress, disrupt, and harm both its own citizens and those of other countries. In a stroke of luck, after having knocked on his office door, I was greeted by my future research professor, who, despite knowing that I did not having any formal education in computer science, had accepted me to be his research lab student. The thing that piqued his interest? Why an American who, having just lived in China, desired so adamantly to research how to use computer science to combat harmful technological influences originating from China and how to support Taiwan.
                </p>


                <h4 className="overlay-text">
                    Abstract 📝
                </h4>
                <p className="overlay-text">
                    Ecommerce scam is a cybercrime that affects online consumer shoppers in nearly every country. Criminal groups implement deceiving ecommerce websites that lure consumers into purchasing their products, only to make away with the consumer’s money without giving the consumer what they had promised to sell them. Researchers have utilized a variety of domain features, from website HTML source code features to a domain’s DNS features to create frameworks that could identify ecommerce scam websites. However, much of the previous literature regarding this subject matter has neglected the potentially advantageous use of a domain’s location data to differentiate ecommerce scam websites from benign ecommerce websites. In this thesis, to find novel ways to combat ecommerce scam, the potential application of a domain’s location data as novel features to detect ecommerce scam websites was investigated.
                </p>
                <p className="overlay-text">
                    The first finding is that through testing with supervised machine learning models, it was discovered that our novel domain location features, in the form of domain location co-occurrences and geographical distances are effective features to detect ecommerce scam domains. Secondly, to our knowledge, we are the first researchers to have done a detailed analysis of domain location features between benign and scam ecommerce domains. To which, it was revealed that the location features of ecommerce scam domains, in comparison with benign ecommerce domains, tended to have much lower location co-occurrences and larger location distances with the country that they were marketing towards. Thirdly, an analysis was performed on the location features in our dataset at a local country level and to our knowledge, we are the first researchers to reveal the current trends in domain location data for ecommerce scam and benign websites in Taiwan. To which, it was discovered that ecommerce scam domains in Taiwan, in comparison to benign ecommerce domains in Taiwan, evidently possessed more location associations with China and less or none with Taiwan. Conversely, benign ecommerce domains in Taiwan, tended to have more location associations with Taiwan, and less or none with China. Therefore, this could serve as strong evidence to suspect that for foreign scam groups targeting a specific country, it is difficult, risky, and or costlier to ensure their scam domain’s various location data are located in the target country. Hence, the novel domain location features introduced in this thesis appear to be viable features in the detection of ecommerce scam domains, since they are likely not domain data features that scam groups are able to adapt to at a whim to evade detection.
                </p>



                <h4 className="overlay-text">
                    Full Thesis Text 📔
                </h4>
                <p className="overlay-text">
                    This thesis text and presention can be viewed by clicking on the images below. Additional information about the thesis can be found via the <a href="https://etheses.lib.ntust.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dstdcdr&s=id=%22G0M10815809%22.&searchmode=basic&switchlang=en" target="_blank">National Taiwan University of Science and Technology E-thesis portal</a>.
                </p>
                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <a href="https://drive.google.com/file/d/1K7GeS1mpqwpxy9cPdMAmzoVx1PH7aYMo/view?usp=sharing" target="_blank">
                            <img id="crisp" src="/website/images/MastersThesis/thesis.jpg" style={{ width: isDesktop ? "400px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        </a>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> This master's thesis text can be viewed via this<br></br><a href="https://drive.google.com/file/d/1K7GeS1mpqwpxy9cPdMAmzoVx1PH7aYMo/view?usp=sharing" target="_blank">google drive link</a>
                        </p>
                    </div>
                </div>

                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <a href="https://drive.google.com/file/d/1A9qBjcxb7he0rlD9qkQcSyvyS04wMSrd/view?usp=sharing" target="_blank">
                            <img id="crisp" src="/website/images/MastersThesis/thesis_presentation.jpg" style={{ width: isDesktop ? "600px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        </a>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "400px" : "95%", height: isDesktop ? "auto" : "auto" }}> This master's thesis presentation can be viewed via this<br></br><a href="https://drive.google.com/file/d/1A9qBjcxb7he0rlD9qkQcSyvyS04wMSrd/view?usp=sharing" target="_blank">google drive link</a>
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

export default MastersThesis