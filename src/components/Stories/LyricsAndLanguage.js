import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"
import { VscReferences } from "react-icons/vsc";
import tableau from "tableau-api"




const LyricsAndLanguage = (props) => {

    const isDesktop = window.innerWidth > 1200 ? true : false


    const [ref, setRef] = useState(false)
    const [fade, setFade] = useState(0)

    const handleRef = () => {
        setRef(prevRef => !prevRef)
    }

    const elementRef = useRef();
    const elementRef2 = useRef();
    const elementRef3 = useRef();
    const elementRef4 = useRef();
    const elementRef5 = useRef();
    const elementRef6 = useRef();
    const elementRef7 = useRef();


    useEffect(() => {
        initViz()
        document.documentElement.style.setProperty("--color-story", "rgb(185, 255, 234)")
    }, [])

    const options = {
        width: isDesktop ? "100%" : "100%",
        height: isDesktop ? "100%" : "100%",
        hideTabs: true,
    }

    const options_b = {
        width: isDesktop ? "100%" : "100%",
        height: isDesktop ? "100%" : "100%",
        hideTabs: false
    }

    const initViz = () => {
        const vizUrl = "https://public.tableau.com/views/songs_16325391595330/FeelingsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl2 = "https://public.tableau.com/views/songs_16325391595330/FeelingsTW?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl3 = "https://public.tableau.com/views/songs_16325391595330/PronounsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl4 = "https://public.tableau.com/views/songs_16325391595330/PronounsTW?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl5 = "https://public.tableau.com/views/songs_16325391595330/TopicsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl6 = "https://public.tableau.com/views/songs_16325391595330/TopicsTW?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl7 = "https://public.tableau.com/views/songs_16325391595330/ProfanityUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"


        const vizContainer = elementRef.current;
        let viz = new window.tableau.Viz(vizContainer, vizUrl, options)

        const vizContainer2 = elementRef2.current;
        let viz2 = new window.tableau.Viz(vizContainer2, vizUrl2, options)


        const vizContainer3 = elementRef3.current;
        let viz3 = new window.tableau.Viz(vizContainer3, vizUrl3, options)

        const vizContainer4 = elementRef4.current;
        let viz4 = new window.tableau.Viz(vizContainer4, vizUrl4, options)

        const vizContainer5 = elementRef5.current;
        let viz5 = new window.tableau.Viz(vizContainer5, vizUrl5, options)

        const vizContainer6 = elementRef6.current;
        let viz6 = new window.tableau.Viz(vizContainer6, vizUrl6, options)

        const vizContainer7 = elementRef7.current;
        let viz7 = new window.tableau.Viz(vizContainer7, vizUrl7, options)
    }

    return (
        <div className="overlay">
            <div className="overlay-exit"
                onClick={() => props.exitButtonProps(props.keyProps)}
            >
                <BiXCircle />
            </div>
            <div
                onClick={handleRef}
                onAnimationEnd={() => setFade(0)}
                fade={fade}
                className="overlay-ref-button"
                href="#ref-toggle"
            >
                <VscReferences />
            </div>

            <div className="overlay-container">
                {/*<div className="overlay-ref" style={{ display: ref ? "block" : "none" }}>
                     <p className="ref-title">References</p>

                    <p className="ref-text">
                        <span className="glow-text">[1] Inspiration:</span>
                        <br></br>
                        "Interactive Map: Taipei's Income Distribution"
                        <br></br>
                        <i>Miss Moss</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://missmoss.info/taipei-income-map/index.html" target="_blank">Link</a>
                        </p>
                    </p>


                    <p className="ref-text">
                        <span className="glow-text">[2] Taipei Towns and Villages Spatial Map File:</span>
                        <br></br>
                        "Taiwan Map Store"
                        <br></br>
                        村(里)界(TWD97經緯度)1101214 (2020)
                        <br></br>
                        <i>Taiwan National Land Surveying and Mapping Center</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://whgis.nlsc.gov.tw/English/5-1Files.aspx" target="_blank">Link</a>
                        </p>
                    </p>


                    <p className="ref-text">
                        <span className="glow-text">[3] NYC Zip Codes Spatial Map File:</span>
                        <br></br>
                        "ZIP Code Tabulation Areas (2020)"
                        <br></br>
                        <i>United States Census Bureau</i>
                        <br></br>

                        <p id="ref-link" className="ref-text">

                            <a className="ref-text" href="https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2020&layergroup=ZIP+Code+Tabulation+Areas" target="_blank">Link</a>
                        </p>
                    </p>

                <p className="ref-text">
                    <span className="glow-text">[4] Median Income of Villages and Towns in Taiwan:</span>
                    <br></br>
                    "107年度綜稅所得總額各縣市鄉鎮村里統計分析表-縣市別：臺北市" (2018)
                    <br></br>
                    <i>Taiwan National Development Council</i>
                    <br></br>
                    <p id="ref-link" className="ref-text">
                        <a className="ref-text" href="https://data.gov.tw/dataset/17983" target="_blank">Link</a>
                    </p>
                </p>



     
                </p>
            </div> */}

                <h2 className="overlay-text">Lyrics & Language</h2>

                <p className="overlay-subtle">Last Updated: 25/09/2021</p>
                <p className="overlay-subtle">5 min read</p>

                {/* <div className="video-container">
                <div className="video-wraper">
                    <iframe className="youtube" src="https://www.youtube.com/embed/2Tv8KAMrGjw?start=8&autoplay=1&loop=1&mute=1&controls=1&showinfo=0&playlist=2Tv8KAMrGjw" title="YouTube video player" frameborder="0" autoPlay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div> */}

                <div className="overlay-quote-container">
                    <h4 className="overlay-quote">What topics are sung about and how they are sung in music can reveal a great deal about a culture</h4>
                </div>

                <h4 className="overlay-text">
                    Inspiration 💡
                </h4>

                {/* <p className="overlay-text">
                One of my favorite things from my time living in Taipei was that wherever I walked around in Taipei, it never felt like that some city sub-districts possessed far more or less resources than others. Each sub-district seemed to have the essential resources that people need to live their lives in a healthy and productive way, like access to public transportation, schools/universities , clinics, grocery stores, parks, restaurants, shopping areas and very importantly, public safety. This was a stark contrast to what I had seen in urban US cities, where many sub-districts within the city lack basic public safety, healthcare facilities, good schools, reliable public transportation, and are composed of large food deserts.
            </p>
            <p className="overlay-text">
                I recently stumbled upon an article discussing Taipei’s geographical income distribution [1], which challenged me to reevaluate just how progressive Taipei really is. The author used storytelling, government data, and visualizations to express how Taipei’s income disparity can be seen in comparatively low wages for even “long hour putting-white collar workers” and distinct city districts that are inhabited by the ultra wealthy. This article made me question whether I had a view of Taipei that was a bit starry-eyed, and thus, had pushed me to investigate this matter further.
            </p> */}


                <h4 className="overlay-text">
                    Summary 📝
                </h4>
                <p className="overlay-text">
                    {/* In this research, hard quantifiable evidence was paired with empathetic storytelling to convey meaning to complex data related to income distribution. In the end, the evidence gathered appears to reveal that based on several different metrics, NYC possesses a significantly higher level of income disparity than Taipei. To supplement this quantifiable data, the use of more-subjective tools/information were utilized to provide additional context and details, such as custom color schemes, photographs, figures, and first-hand accounts. */}
                </p>


                <h4 className="overlay-text">
                    Data Sources 💾
                </h4>
                <p className="overlay-text">
                    {/* <b>1. Mapping Data</b>
                <br></br>
                <p className="overlay-text-indent">1A. Taipei Towns and Villages Spatial Map File (2020) <span className="glow-text">[2]</span></p>
                <p className="overlay-text-indent">1B. NYC Zip Codes Spatial Map File (2020) <span className="glow-text">[3]</span></p>
                <br></br>
                <b>2. Income Data Utilized to Map Onto Mapping Data</b>
                <p className="overlay-text-indent">2A. Median Income of Villages and Towns in Taiwan (2018) <span className="glow-text">[4]</span></p>
                <p className="overlay-text-indent">2B. Median Income of Zip Codes in the US (2019) <span className="glow-text">[5]</span></p>
                <br></br>
                <b>3. Mean Household Income by Quintile Data for Each Country for Reference</b>
                <p className="overlay-text-indent">3A. Average Taiwan Household Income by Quintile (2020) <span className="glow-text">[6]</span></p>
                <p className="overlay-text-indent">3B. Average US Household Income by Quintile (2020) <span className="glow-text">[7]</span></p> */}
                </p>


                <h4 className="overlay-text">
                    Disclaimer (factors to keep in mind) ⚠️
                </h4>
                <p className="overlay-text">
                    {/* - The cost of living varies greatly in different areas of each city.
                <br></br>
                - The poverty line definition and rate for each country and city.
                <br></br>
                - These city maps are based on median household income. Whereas, the mean is used for household income of each country. */}
                </p>


                <h4 className="overlay-text">
                    Final Visualization 🖼
                </h4>

                <div className="overlay-tableau-container">
                    <div className="overlay-title-container-border">
                        <h4 className="overlay-title"><span class="highlight-story">Feels</span></h4>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  US Music</span></p>
                        <div ref={elementRef} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "600px" : "500px" }}></div>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  Taiwan Music</span></p>
                        <div ref={elementRef2} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "600px" : "500px" }}></div>
                    </div>
                    <div className="overlay-title-container">
                        <p className="overlay-text">
                        Words specifically related to feelings and emotions were compiled for this visualization. Perhaps a bit unsurprisingly, lyrics from both country’s music sample most referenced positive emotion words, like “love”, “want”, and “feel” (categorized in warmer shades of colors). An interesting difference noticed is that lyrics in US music seemed to include a broader range of words related to emotions not seen in the lyrics of Taiwanese music, such as “hate” and “suicidal”. Overall though, there was a great amount of overlap for feeling related words between the two country’s music lyrics. 
                        </p>
                    </div>
                </div>
                <div className="overlay-tableau-container">
                    <div className="overlay-title-container">
                        <h4 className="overlay-title">Who</h4>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  US Music</span></p>
                        <div ref={elementRef3} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "400px" : "250px" }}></div>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  Taiwan Music</span></p>
                        <div ref={elementRef4} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "400px" : "250px" }}></div>
                    </div>
                    <div className="overlay-title-container">
                        <p className="overlay-text">
                        This visualization included only pronouns. Both country’s music sample had almost an identical composition ratio for each pronoun. 
                        </p>
                    </div>
                </div>
                <div className="overlay-tableau-container">
                    <div className="overlay-title-container">
                        <h4 className="overlay-title">Topics </h4>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  US Music</span></p>
                        <div ref={elementRef5} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "600px" : "400px" }}></div>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  Taiwan Music</span></p>
                        <div ref={elementRef6} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "600px" : "400px" }}></div>
                    </div>
                    <div className="overlay-title-container">
                        <p className="overlay-text">
                        For this topics-related words visualization, the most referenced nouns were chosen from each country’s music sample. Verbs and emotion related words were mostly excluded to differentiate this visualization from the feelings-related words visualization. 
                        {/* This might be entirely my own opinion, but this visualization aligns with my impression that Taiwanese music tends to  */}
                        </p>
                    </div>
                </div>
                <div className="overlay-tableau-container">
                    <div className="overlay-title-container">
                        <h4 className="overlay-title">Profanity </h4>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  US Music</span></p>
                        <div ref={elementRef7} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "400px" : "400px" }}></div>
                    </div>
                    <div className="overlay-title-container">
                        <p className="overlay-text">
                        An obvious difference noticed between both samples of music from the US and Taiwan is that the Taiwanese music sample rarely, if at all, references profanity. Whereas, the lyrics from the US music sample referenced profanity quite frequently. So much so that some were in the top 10 most referenced words in general (the earlier US music visualizations excluded profanity. If had been included, many of these words would have occupied the top spots) 
                        </p>
                    </div>
                </div>



                <h4 className="overlay-text">
                    Methodology ⚙️
                </h4>
                <p className="overlay-text">

                </p>



                {/* <h4 className="overlay-text">
                    Quotes 🎤
                </h4>
                <div className="overlay-quote-container">
                    <h4 className="overlay-quote">
                        "[Quote]"
                    </h4>
                    <h4 className="overlay-quote-name">
                        - [Quote]
                    </h4>
                </div> */}


                <h4 className="overlay-text">
                    Summary and Takeway 📝
                </h4>
                <p className="overlay-text">

                </p>
                <p className="overlay-text">

                </p>

                <h4 className="overlay-text">
                    Q & A  🙋‍♀️🙋‍♂️
                </h4>
                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q:</span>
                    <br></br>
                    <span className="glow-text">A:</span>
                </p>

                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q:</span> I would like to offer feedback or ask a question. How can I get in contact with you?
                    <br></br>
                    <span className="glow-text">A:</span> Please visit the following link and write a comment: <a href="https://github.com/ericdaoo/website/discussions/1" target="_blank"> Link </a>
                </p>
            </div>


        </div >
    )
}

export default LyricsAndLanguage