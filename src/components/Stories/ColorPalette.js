import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"
import { VscReferences } from "react-icons/vsc";
import tableau from "tableau-api"




const ColorPalette = (props) => {

    const isDesktop = window.innerWidth > 900 ? true : false

    const [ref, setRef] = useState(false)
    const [fade, setFade] = useState(0)

    const handleRef = () => {
        setRef(prevRef => !prevRef)
    }

    const elementRef = useRef();
    const elementRef2 = useRef();

    useEffect(() => {
        initViz()
    }, [])

    const options = {
        width: isDesktop ? "800px" : "100%",
        height: isDesktop ? "500px" : "100%",
        hideTabs: true

    }

    const initViz = () => {
        const vizUrl = "https://public.tableau.com/views/NYCIncomeDisparity/NYCIncomeDisparityMap?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl2 = "https://public.tableau.com/views/TaipeiIncomeDisparity/TaipeiIncomeDisparityMap?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"


        // const vizContainer = elementRef.current;
        // let viz = new window.tableau.Viz(vizContainer, vizUrl, options)

        // const vizContainer2 = elementRef2.current;
        // let viz2 = new window.tableau.Viz(vizContainer2, vizUrl2, options)
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
                <div className="overlay-ref" style={{ display: ref ? "block" : "none" }}>
                    <p className="ref-title">References</p>

                    <p className="ref-text">
                        <span className="glow-text">[1] Inspiration:</span>
                        <br></br>
                        "Interactive Map: Taipei's Income Distribution"
                        <br></br>
                        <i>Miss Moss</i>
                        <br></br>
                        <a className="ref-text" href="https://missmoss.info/taipei-income-map/index.html" target="_blank">Link</a>
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
                        <a className="ref-text" href="https://whgis.nlsc.gov.tw/English/5-1Files.aspx" target="_blank">Link</a>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[3] Median Income of Zip Codes in the US:</span>
                        <br></br>
                        "ZIP Code Tabulation Areas (2020)"
                        <br></br>
                        <i>United States Census Bureau</i>
                        <br></br>
                        <a className="ref-text" href="https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2020&layergroup=ZIP+Code+Tabulation+Areas" target="_blank">Link</a>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[4] Median Income of Villages and Towns in Taiwan:</span>
                        <br></br>
                        "107年度綜稅所得總額各縣市鄉鎮村里統計分析表-縣市別：臺北市" (2018)
                        <br></br>
                        <i>Taiwan National Development Council</i>
                        <br></br>
                        <a className="ref-text" href="https://data.gov.tw/dataset/17983" target="_blank">Link</a>
                    </p>

                    

                    <p className="ref-text">
                        <span className="glow-text">[5] Median Income of Zip Codes in the US:</span>
                        <br></br>
                        "S1903 Median Income in the Past 12 Months (in 2019 inflation-adjusted dollars)"
                        <br></br>
                        <i>United States Census Burreau</i>
                        <br></br>
                        <a className="ref-text" href="https://data.census.gov/cedsci/map?q=s1903&mode=customize&tid=ACSST5Y2019.S1903&vintage=2019&layer=VT_2019_860_00_PY_D1&cid=S1903_C03_015E&break=9&palette=RdYlGn" target="_blank">Link</a>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[6] Average Taiwan household Income by Quintile:</span>
                        <br></br>
                        "REPORT ON THE SURVEY OF FAMILY INCOME AND EXPENDITURE" (2020)
                        <br></br>
                        Table 3. Average Disposable Income per Household by Disposable Income Quintile
                        <br></br>
                        <i>National Statistics, R.O.C. (Taiwan)</i>
                        <br></br>
                        <a className="ref-text" href="https://win.dgbas.gov.tw/fies/doc/result/109.pdf" target="_blank">Link</a>
                    </p>


                    <p className="ref-text">
                        <span className="glow-text">[7] Average US household Income by Quintile:</span>
                        <br></br>
                        "The U.S. Income Distribution: Trends and Issues" (2020)
                        <br></br>
                        Table H-3. Mean Household Income Received by Each Fifth and Top 5 Percent
                        <br></br>
                        <i>United States Census Bureau</i>
                        <br></br>
                        <a className="ref-text" href="https://sgp.fas.org/crs/misc/R44705.pdf" target="_blank">Link</a>
                    </p>


                    

                </div>

                <h2 className="overlay-text">Color Palette</h2>

                <p className="overlay-subtle">15 min read</p>

                <div className="overlay-text">
                    <h4 className="overlay-quote">I long had an unquestioned assumption that large cities naturally equate to large income disparities. It wasn’t until I lived in Taipei did I realize that this was a myth</h4>
                </div>

                <h4 className="overlay-text">
                    Inspiration 💡
                </h4>

                <p className="overlay-text">
                    From my time living in Taipei, one of my favorite things was that wherever I walked around the city, it never felt like that some city sub-districts possessed far more or less resources than others. Each sub-district seemed to have the essential resources that people need to live their lives in a healthy and productive way, like access to public transportation, good schools, clinics, grocery stores, parks, restaurants, shopping areas and most importantly, public safety. This was a stark contrast to what I had seen in urban US cities, where many sub-districts within a city lack public safety, maintained healthcare facilities, reliable public transportation, and proper access to grocery stores.
                </p>
                <p className="overlay-text">
                    I eventually stumbled upon an article discussing Taipei’s geographical income distribution [1], which challenged me to reevaluate just how progressive Taipei really is. The author used storytelling, government data, and visualizations to express how Taipei’s income disparity can be seen in comparatively low wages for even “long hour putting-white collar workers” and distinct city districts that are inhabited by the ultra wealthy. This made me question whether I had a view of Taipei that was a bit starry-eyed. At the same time though, my initial reaction to this article was that if the author believes Taipei is a city pervaded with extreme income inequality, they would be utterly horrified to see what the situation is like in many US cities, like New York.
                </p>
                <div className="video-container">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/2Tv8KAMrGjw?autoplay=1&mute=1&loop=1?controls=0" title="YouTube video player" frameborder="0" autoPlay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <h4 className="overlay-text">
                Summary 📝
                </h4>
                <p className="overlay-text">
                    I had initially started this project to find an answer to the question of whether I could reveal quantifiable evidence showing the severity of income inequality in the US compared to Taiwan. As I progressed in my research, the topic of income inequality proved to consist of far too many complex and or unknown variables for me to want to continue attempting to answer such a nuanced and complicated question. Instead, my end goal had shifted to presenting my data and posing open to debate hypotheses. In addition to this goal, I wanted to gain more insight into the important role that color schemes have in the interpretation of data visualizations.
                </p>


                <h4 className="overlay-text">
                    Data Sources 💾
                </h4>
                <p className="overlay-text">
                    1. Mapping Data
                    <br></br>
                    <p className="overlay-text-indent">1A. Taipei Towns and Villages Spatial Map File (2020) <span className="glow-text">[2]</span></p>
                    <p className="overlay-text-indent">1B. NYC Zip Codes Spatial Map File (2020) <span className="glow-text">[3]</span></p>
                    <br></br>
                    2. Income Data to Map Onto Mapping Data
                    <p className="overlay-text-indent">2A. Median Income of Villages and Towns in Taiwan (2018) <span className="glow-text">[4]</span></p>
                    <p className="overlay-text-indent">2B. Median Income of Zip Codes in the US (2019) <span className="glow-text">[5]</span></p>
                    <br></br>
                    3. Mean Income Data for Each Country for Reference
                    <p className="overlay-text-indent">3A. Average Taiwan household Income by Quintile (2020) <span className="glow-text">[6]</span></p>
                    <p className="overlay-text-indent">3B. Average US household Income by Quintile (2020) <span className="glow-text">[7]</span></p>
                </p>


                <h4 className="overlay-text">
                    Disclaimer (factors to keep in mind) ⚠️
                </h4>
                <p className="overlay-text">
                    - The cost of living varies greatly in different areas of each a city.
                    <br></br>
                    - The poverty line definition and rate for each country and city.
                    <br></br>
                    - These city maps are based on median household income. Whereas, the mean is used for household income of each country.
                    <br></br>
                    - The Taipei map is based on median income for taxable households (includes both families and non-family households). Whereas, the NYC maps separately show median income for family households and non-family households.
                </p>


                <h4 className="overlay-text">
                    Final Visualization 🖼
                </h4>

                <div>
                    <p className="overlay-title"> <span className="highlight2">  New York City</span></p>
                    <div ref={elementRef} className="overlay-visual"></div>
                </div>
                <div>
                    <p className="overlay-title"> <span className="highlight2">  Taipei City & New Taipei City</span></p>
                    <div ref={elementRef2} className="overlay-visual"></div>
                </div>


            </div>
        </div>
    )
}

export default ColorPalette