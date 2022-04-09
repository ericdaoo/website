import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"
import { VscReferences } from "react-icons/vsc";
import tableau from "tableau-api"




const ColorPalette = (props) => {

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
        initViz()
        console.log("reset")
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

    const initViz = () => {
        const vizUrl = "https://public.tableau.com/views/NYCIncomeDistribution/Average?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl2 = "https://public.tableau.com/views/TaipeiIncomeDistribution/TaxableHouseholds?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl3 = "https://public.tableau.com/views/income_16329690336040/USMeanIncome_1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl4 = "https://public.tableau.com/views/income_16329690336040/TaiwanMeanIncome_1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"


        const vizContainer = elementRef.current;
        let viz = new window.tableau.Viz(vizContainer, vizUrl, options_b)

        const vizContainer2 = elementRef2.current;
        let viz2 = new window.tableau.Viz(vizContainer2, vizUrl2, options_b)


        const vizContainer3 = elementRef3.current;
        let viz3 = new window.tableau.Viz(vizContainer3, vizUrl3, options)

        const vizContainer4 = elementRef4.current;
        let viz4 = new window.tableau.Viz(vizContainer4, vizUrl4, options)
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

                <div className="video-container">
                    <div className="video-wraper">
                        <iframe className="youtube" src="https://www.youtube.com/embed/2Tv8KAMrGjw?start=8&autoplay=1&loop=1&mute=1&controls=1&showinfo=0&playlist=2Tv8KAMrGjw" title="YouTube video player" frameborder="0" autoPlay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="overlay-quote-container">
                    <h4 className="overlay-quote">I long had an unquestioned assumption that large cities naturally equate to large income disparities. It wasn’t until I lived in Taipei did I realize that this was a myth</h4>
                </div>

                <h4 className="overlay-text">
                    Inspiration 💡
                </h4>

                <p className="overlay-text">
                    One of my favorite things from my time living in Taipei was that wherever I walked around the city, it never felt like that some city sub-districts possessed far more or less resources than others. Each sub-district seemed to have the essential resources that people need to live their lives in a healthy and productive way, like access to public transportation, schools/universities , clinics, grocery stores, parks, restaurants, shopping areas and very importantly, public safety. This was a stark contrast to what I had seen in urban US cities, where many sub-districts within an urban city lack basic public safety, maintained healthcare facilities, reliable public transportation, and are composed of large food desert areas.
                </p>
                <p className="overlay-text">
                    I eventually stumbled upon an article discussing Taipei’s geographical income distribution <span className="glow-text">[1]</span>, which challenged me to reevaluate just how progressive Taipei really is. The author used storytelling, government data, and visualizations to express how Taipei’s income disparity can be seen in comparatively low wages for even “long hour putting-white collar workers” and distinct city districts that are inhabited by the ultra wealthy. This made me question whether I had a view of Taipei that was a bit starry-eyed. At the same time though, my initial reaction to this article was that if the author believes Taipei is a city pervaded with extreme income inequality, they might be horrified to see what the situation is like in many US cities, especially New York City.
                </p>


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
                    <b>1. Mapping Data</b>
                    <br></br>
                    <p className="overlay-text-indent">1A. Taipei Towns and Villages Spatial Map File (2020) <span className="glow-text">[2]</span></p>
                    <p className="overlay-text-indent">1B. NYC Zip Codes Spatial Map File (2020) <span className="glow-text">[3]</span></p>
                    <br></br>
                    <b>2. Income Data to Map Onto Mapping Data</b>
                    <p className="overlay-text-indent">2A. Median Income of Villages and Towns in Taiwan (2018) <span className="glow-text">[4]</span></p>
                    <p className="overlay-text-indent">2B. Median Income of Zip Codes in the US (2019) <span className="glow-text">[5]</span></p>
                    <br></br>
                    <b>3. Mean Income by Quintile Data for Each Country for Reference</b>
                    <p className="overlay-text-indent">3A. Average Taiwan household Income by Quintile (2020) <span className="glow-text">[6]</span></p>
                    <p className="overlay-text-indent">3B. Average US household Income by Quintile (2020) <span className="glow-text">[7]</span></p>
                </p>


                <h4 className="overlay-text">
                    Disclaimer (factors to keep in mind) ⚠️
                </h4>
                <p className="overlay-text">
                    - The cost of living varies greatly in different areas of each city.
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

                <div className="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  New York City</span></p>
                        <div ref={elementRef} className="overlay-tableau" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "600px" : "500px" }}></div>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  Taipei City</span></p>
                        <div ref={elementRef2} className="overlay-tableau" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "600px" : "500px" }}></div>
                    </div>
                </div>
                <div className="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  US </span></p>
                        <div ref={elementRef3} className="overlay-tableau" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "360px" : "300px" }}></div>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  Taiwan </span></p>
                        <div ref={elementRef4} className="overlay-tableau" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "360px" : "300px" }}></div>
                    </div>
                </div>


                <h4 className="overlay-text">
                    Methodology ⚙️
                </h4>
                <p className="overlay-text">
                    Much of this research process involved searching for relevant and reputable data sources. In the end, public government data from each country were used. Once data was collected, Pandas  was utilized to clean and prepare the data to be brought into Tableau to create a one to one mapping between each city’s sub-district spatial area and sub-district median income amount.
                </p>
                <p className="overlay-text">
                    It must be noted that the income data for Taipei households is based on “taxable households”, which includes both family households and non-family households together. Whereas, the household income data for New York City is divided into family households and non-family households separately. Because of this distinction, an average of these two NYC income data sources was taken, and a third map was created based on this averaging.
                </p>
                <p className="overlay-text">
                    Furthermore, several different color schemes were tested for the color palette mapping parameter in Tableau. This parameter determines how median income is represented in a color spectrum for each sub-district on the map. Selecting the appropriate color scheme for each map was a difficult task because it required the use of both quantifiable data and subjective opinion. The former of which, included referencing the mean income by quintile for each country [6, 7]. Meanwhile, the latter, included choosing colors based on anticipated emotional responses to those colors. Specifically,  red, green, and blue were utilized in an attempt to elicit corresponding emotional responses to three categories of income classes: in need, healthy, and overabundance.
                </p>

                <h4 className="overlay-text">
                    Results 🧪
                </h4>
                <p className="overlay-text-b">
                    <b>1. Intensity of Income Inequality</b>
                </p>
                <p className="overlay-text">
                    The NYC maps appear to reveal that the range in median income between city sub-districts is much wider than Taipei’s. Specifically, the difference between the sub-district with the lowest median income and the highest median income in NYC is over 10x: US$20,000 vs. US$211,000  (Non-Family and Family Households Average) Whereas, in Taipei, the difference is, at most, about ~2.6x: NT$468k vs. NT$1,207k.
                </p>
                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/nyc_intensity.jpg" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note">NYC Lowest and Highest Zip Code Median Income Difference (Average of Family and Non-Family Households) [3,5]</p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/taipei_intensity.jpg" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note">Taipei Lowest and Highest Village Median Income Difference (Taxable Households) [2,4]</p>
                    </div>
                </div>
                <br></br>
                <p className="overlay-text-b">
                    <b>2. Income Class Segregation</b>
                </p>
                <p className="overlay-text">
                    It is a possibility that in Taipei, residents of a wider range of income classes live in closer proximity to each other than in NYC. This is best illustrated by the fact that not a single sub-district within all of Taipei has medium income that falls into the country’s 5th / highest mean income quintile. Whereas, in the NYC map, 72 out of the 336 (~21%) zip-codes fall within the US’ 5th / highest mean income quintile.
                </p>
                <p className="overlay-text">
                    Putting aside numbers for a moment, this income class integration in Taipei can also be felt when wandering XinYi district / 信義區, some call the "Manhattan of Taipei". This district in Taipei possesses the highest sky-rises, luxury shopping centers and apartments, but at the same time still appears to be inhabited by everyday people of all income classes. This could explain why, despite the apparent prosperity in XinYi district, the median income is nevertheless not incredibly high compared to other sub-districts in Taipei. (the majority of sub-districts’ medium incomes within XinYi district fall within Taiwan’s 3rd and 4th mean income quintiles) Whereas in NYC, the majority of sub-districts in downtown Manhattan have median household incomes that fall into the US’ 5th / highest mean income quintile.
                </p>
                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/vernon-raineil-cenzon-oi3i-KGp95A-unsplash.jpg" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note"> Bird's eye view of Taipei's Xin'yi district <br></br>- Photo by <a href="https://unsplash.com/@thevernon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vernon Raineil Cenzon</a>
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/ivan-hutomo-YMraIPFX8Bw-unsplash.jpg" style={{ padding: "auto", width: isDesktop ? "300px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "300px" : "100%", height: isDesktop ? "auto" : "auto" }}>Taipei 101 <br></br>- Photo by <a href="https://unsplash.com/@alexivaner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Hutomo</a>
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/eric-barbeau-rJ1igIZDcAI-unsplash.jpg" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note">Da'an district, another affluent district in Taipei that often feels like it's inhabited by everday people<br></br>- Photo by <a href="https://unsplash.com/@ericbarbeau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eric BARBEAU</a>
                        </p>
                    </div>

                    <div className="overlay-text-visual-container">
                        <img src="/website/images/markus-winkler-hkCVGNHBmow-unsplash.jpg" style={{ width: isDesktop ? "300px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "300px" : "100%", height: isDesktop ? "auto" : "auto" }}>Taipei 101 behind an old apartment building (some people poke fun at Taipei's worn down buildings, but I personally feel it gives character)<br></br>- Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a>
                        </p>
                    </div>
                </div>
                <p className="overlay-text-b">
                    <b>3. Color Schemes</b>
                </p>
                <p className="overlay-text-b">

                </p>
                <div className="overlay-visual">
                    {/* <img width="400px" src="/website/images/color_palette_1.png"></img>
                    <img width="400px" src="/website/images/color_palette_1.png"></img> */}
                    <p>In Progress</p>

                </div>


            </div>
        </div>
    )
}

export default ColorPalette