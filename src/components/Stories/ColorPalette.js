import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"
import { VscReferences } from "react-icons/vsc";
import tableau from "tableau-api"




const ColorPalette = (props) => {

    const isDesktop = window.innerWidth > 1200 ? true : false
    const isTablet = window.innerWidth >= 500 ? true : false //images that use this conditional should be under 500px or else the width will be too big
    const isTablet_b = window.innerWidth >= 700 ? true : false // good for when an image's width is between 500px and 700px

    //window.innerWidth > 500 && window.innerWidth < 1000 ? true : false

    document.documentElement.style.setProperty("--color-story", "rgb(255, 124, 174)")


    const desktopOrTablet = () => {
        if (!isDesktop) {
            return isTablet
        }
        else {
            return isDesktop
        }
    }

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

        // Add a sleep part here. Maybe that'll give the vizUrls enough time to be call the Tableau API?

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



                    <p className="ref-text">
                        <span className="glow-text">[5] Median Income of Zip Codes in the US:</span>
                        <br></br>
                        "S1903 Median Income in the Past 12 Months (in 2019 inflation-adjusted dollars)"
                        <br></br>
                        <i>United States Census Burreau</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://data.census.gov/cedsci/map?q=s1903&mode=customize&tid=ACSST5Y2019.S1903&vintage=2019&layer=VT_2019_860_00_PY_D1&cid=S1903_C03_015E&break=9&palette=RdYlGn" target="_blank">Link</a>
                        </p>
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
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://win.dgbas.gov.tw/fies/doc/result/109.pdf" target="_blank">Link</a>
                        </p>
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
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://sgp.fas.org/crs/misc/R44705.pdf" target="_blank">Link</a>
                        </p>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[8] Manhattan Photo:</span>
                        <br></br>
                        <i>Luca Bravo</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://unsplash.com/@lucabravo" target="_blank">Link</a>
                        </p>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[9] Xin'yi Photo:</span>
                        <br></br>
                        <i>Timo Volz</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://unsplash.com/@magict1911" target="_blank">Link</a>
                        </p>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[10] Taipei Photo 1:</span>
                        <br></br>
                        <i>Vernon Raineil Cenzon</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://unsplash.com/@thevernon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Link</a>
                        </p>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[11] Taipei Photo 2:</span>
                        <br></br>
                        <i>Ivan Hutomo</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://unsplash.com/@alexivaner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Link</a>
                        </p>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[12] Taipei Photo 3:</span>
                        <br></br>
                        <i>Eric BARBEAU</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://unsplash.com/@ericbarbeau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Link</a>
                        </p>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[13] Taipei Photo 4:</span>
                        <br></br>
                        <i>Markus Winkler</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Link</a>
                        </p>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[14] Color Scheme Comparison 2:</span>
                        <br></br>
                        "你知道台灣的富人都住在哪裡嗎？ 7張圖表帶你看台灣六都「收入地圖」"
                        <br></br>
                        <i>林佳賢, 關鍵評論網</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://www.thenewslens.com/article/26593" target="_blank">Link</a>
                        </p>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[15] Color Scheme Comparison 3:</span>
                        <br></br>
                        "Here's A Block-By-Block Look At Who's Making How Much Across NYC's 5 Boroughs"
                        <br></br>
                        <i>Andy Kiersz, Business Insider</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://www.businessinsider.com/new-york-city-income-maps-2014-12" target="_blank">Link</a>
                        </p>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[16] Color Scheme Comparison 4:</span>
                        <br></br>
                        "Wealth Divides"
                        <br></br>
                        <i>Allen Carroll, Esri's StoryMaps team</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://storymaps.arcgis.com/stories/a4328e9d4a1544ad92a7025fd4d670a0" target="_blank">Link</a>
                        </p>
                    </p>



                </div>

                <h2 className="overlay-text">Color Palette</h2>

                <p className="overlay-subtle">Last Updated: 20/04/2022</p>
                <p className="overlay-subtle">10 min read</p>

                <div className="video-container">
                    <div className="video-wraper">
                        <iframe className="youtube" src="https://www.youtube.com/embed/2Tv8KAMrGjw?start=8&autoplay=1&loop=1&mute=1&controls=1&showinfo=0&playlist=2Tv8KAMrGjw" title="YouTube video player" frameborder="0" autoPlay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="overlay-quote-container">
                    <h4 className="overlay-quote">I long had an unquestioned assumption that large cities naturally equate to large income disparities. It wasn’t until I lived in Taipei did I realize that this is not always the case</h4>
                </div>

                <h4 className="overlay-text">
                    Inspiration 💡
                </h4>

                <p className="overlay-text">
                    One of my favorite things from my time living in Taipei was that wherever I walked around in Taipei, it never felt like that some city sub-districts possessed far more or less resources than others. Each sub-district seemed to have the essential resources that people need to live their lives in a healthy and productive way, like access to public transportation, schools/universities , clinics, grocery stores, parks, restaurants, shopping areas and very importantly, public safety. This was a stark contrast to what I had seen in urban US cities, where many sub-districts within the city lack basic public safety, healthcare facilities, good schools, reliable public transportation, and are composed of large food deserts.
                </p>
                <p className="overlay-text">
                    I recently stumbled upon an article discussing Taipei’s geographical income distribution [1], which challenged me to reevaluate just how progressive Taipei really is. The author used storytelling, government data, and visualizations to express how Taipei’s income disparity can be seen in comparatively low wages for even “long hour putting-white collar workers” and distinct city districts that are inhabited by the ultra wealthy. This article made me question whether I had a view of Taipei that was a bit starry-eyed, and thus, had pushed me to investigate this matter further.
                </p>


                <h4 className="overlay-text">
                    Summary 📝
                </h4>
                <p className="overlay-text">
                    In this research, hard quantifiable evidence was paired with empathetic storytelling to convey meaning to complex data related to income distribution. In the end, the evidence gathered appears to reveal that based on several different metrics, NYC possesses a significantly higher level of income disparity than Taipei. To supplement this quantifiable data, the use of more-subjective tools/information were utilized to provide additional context and details, such as custom color schemes, photographs, figures, and first-hand accounts.
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
                    <b>2. Income Data Utilized to Map Onto Mapping Data</b>
                    <p className="overlay-text-indent">2A. Median Income of Villages and Towns in Taiwan (2018) <span className="glow-text">[4]</span></p>
                    <p className="overlay-text-indent">2B. Median Income of Zip Codes in the US (2019) <span className="glow-text">[5]</span></p>
                    <br></br>
                    <b>3. Mean Household Income by Quintile Data for Each Country for Reference</b>
                    <p className="overlay-text-indent">3A. Average Taiwan Household Income by Quintile (2020) <span className="glow-text">[6]</span></p>
                    <p className="overlay-text-indent">3B. Average US Household Income by Quintile (2020) <span className="glow-text">[7]</span></p>
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
                        <div ref={elementRef3} className="overlay-tableau" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "450px" : "450px" }}></div>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  Taiwan </span></p>
                        <div ref={elementRef4} className="overlay-tableau" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "450px" : "450px" }}></div>
                    </div>
                </div>


                <h4 className="overlay-text">
                    Methodology ⚙️
                </h4>
                <p className="overlay-text">
                    Much of this research process involved searching for relevant and reputable data sources. In the end, first-hand public government data from each country were used. Once data was collected, Pandas  was utilized to clean and prepare the data to be brought into Tableau to create a one to one mapping between each city’s sub-district spatial area and median household income amount.
                </p>
                <p className="overlay-text">
                    It must be noted that the income data for Taipei households is based on “taxable households”, which includes both family households and non-family households together. Whereas, the household income data for New York City is divided into family households and non-family households separately. Because of this distinction, an average of these two NYC income data sources was taken, and a third map was created based on this averaging.
                </p>
                <p className="overlay-text">
                    Furthermore, several different color schemes were tested for the color palette mapping parameter in Tableau. This parameter determines how median income is represented in a color spectrum for each sub-district on the map. Selecting the appropriate color scheme for each map was a difficult task because it required the use of both quantifiable data and subjective opinion. The former of which, included referencing the mean household income by quintile for each country [6, 7]. Meanwhile, the latter, included choosing colors based on anticipated emotional responses to those colors. Futher details on the color schemes created are presented in the results section.
                </p>

                <h4 className="overlay-text">
                    Result Findings 🧪
                </h4>
                <p className="overlay-text-b">
                    <b>1. Intensity of Income Inequality</b>
                </p>
                <p className="overlay-text">
                    The maps appear to reveal that the range in median income between sub-districts is much wider in NYC than in Taipei. Specifically, the difference between the sub-district with the lowest median household income and the highest median household income in NYC is over 10x: US$20,000 vs. US$211,000  (Non-Family and Family Households Average). Whereas, in Taipei, the difference is, at most, about ~2.6x: NT$468k vs. NT$1,207k (taxable households).
                </p>
                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/nyc_intensity.jpg" style={{ width: isTablet ? "500px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isTablet ? "450px" : "95%", height: isTablet ? "auto" : "auto" }}>NYC's Lowest and Highest Zip Code Median Income Difference (Average of Family and Non-Family Households) [3,5]</p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/taipei_intensity.jpg" style={{ width: isTablet ? "500px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isTablet ? "450px" : "95%", height: isTablet ? "auto" : "auto" }}>Taipei's Lowest and Highest Village Median Income Difference (Taxable Households) [2,4]</p>
                    </div>
                </div>
                <br></br>
                <p className="overlay-text-b">
                    <b>2. Income Class Segregation</b>
                </p>
                <p className="overlay-text">
                    It is a possibility that in Taipei, residents of a wider range of income classes live in closer proximity to each other than in NYC. This is best illustrated by the fact that not a single sub-district within all of Taipei has a medium income that falls into the country’s 5th / richest mean household income quintile. Whereas, in the NYC map, 72 out of the 336 (~21%) zip-codes fall within the US’ 5th / richest mean household income quintile.
                </p>
                <p className="overlay-text">
                    Putting aside numbers for a moment, this income class integration in Taipei can also be felt when wandering Xin'yi district / 信義區, the district some call the "Manhattan of Taipei". This district in Taipei possesses the highest sky-rises, luxury shopping centers and apartments, but at the same time still appears to be inhabited by everyday people of all income classes. This could explain why, despite the apparent prosperity in Xin'yi district, the median household income there is nevertheless, not incredibly high compared to other sub-districts in Taipei. Specifically, as shown in the figures below, the majority of the sub-district's medium household incomes (taxable households) within Xin'yi district fall within Taiwan’s 3rd mean household income quintile, which is the middle income class quintile. Whereas in NYC, the majority of sub-districts in mid and downtown Manhattan have median household incomes that fall into the US’ 5th / richest mean household income quintile. Specifically, 17/22 or ~77% of Mid and Downtown Manhattan zip codes fall into the 5th / richest US mean household income quintile (Medium Non-Family and Family Households).
                </p>

                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/manhattan.jpg" style={{ width: isTablet ? "400px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isTablet ? "400px" : "95%", height: isTablet ? "auto" : "auto" }}> Mid and Downtown Manhattan's zip code median household income distribution paired with the US' average household income by quintile distribution [3,5,7]<br></br>- Top Photograph by <a href="https://unsplash.com/@lucabravo" target="_blank">Luca Bravo</a> [8]
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/taipei.jpg" style={{ width: isTablet ? "400px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isTablet ? "400px" : "95%", height: isTablet ? "auto" : "auto" }}> Xin'yi district's village median household income distribution paired with Taiwan's average household income by quintile distribution [2,4,6]<br></br>- Top Photograph by <a href="https://unsplash.com/@magict1911" target="_blank">Timo Volz</a> [9]
                        </p>
                    </div>
                </div>

                <p className="overlay-text" style={{ marginTop: "1rem", paddingBottom: "0" }}>
                    Finally, the photographs below by various photographers were chosen to illustrate how Taipei's most affluent districts somehow still seem to possess a unique dichotomy between affluence and equity.
                </p>
                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/ColorPalette/vernon-raineil-cenzon-oi3i-KGp95A-unsplash.jpg" style={{ width: isTablet ? "500px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isTablet ? "450px" : "95%", height: isTablet ? "auto" : "auto" }}> Bird's eye view of Taipei's Xin'yi district <br></br>- Photo by <a href="https://unsplash.com/@thevernon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Vernon Raineil Cenzon</a> [10]
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/ColorPalette/ivan-hutomo-YMraIPFX8Bw-unsplash.jpg" style={{ padding: "auto", width: isTablet ? "300px" : "80%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet ? "300px" : "75%", height: isTablet ? "auto" : "auto" }}>Taipei 101 <br></br>- Photo by <a href="https://unsplash.com/@alexivaner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Ivan Hutomo</a> [11]
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/ColorPalette/eric-barbeau-rJ1igIZDcAI-unsplash.jpg" style={{ width: isTablet ? "500px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isTablet ? "450px" : "95%", height: isTablet ? "auto" : "auto" }}>Da'an district, another affluent district in Taipei that often feels like it's inhabited by everday people of all income classes<br></br>- Photo by <a href="https://unsplash.com/@ericbarbeau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Eric BARBEAU</a> [12]
                        </p>
                    </div>

                    <div className="overlay-text-visual-container">
                        <img src="/website/images/ColorPalette/markus-winkler-hkCVGNHBmow-unsplash.jpg" style={{ width: isTablet ? "300px" : "80%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet ? "300px" : "75%", height: isTablet ? "auto" : "auto" }}>Taipei 101 behind an old apartment building (some people poke fun at Taipei's worn down buildings, but I personally feel it gives character)<br></br>- Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Markus Winkler</a> [13]
                        </p>
                    </div>
                </div>
                <p className="overlay-text-b">
                    <b>3. Color Schemes</b>
                </p>
                <p className="overlay-text">
                    As mentioned in the methodology section of this page, an extensive amount of time was spent experimenting with various color schemes to suit each  map visualization. The goal of which was to find a color scheme that was both accurate to the data and which could naturally elicit particular responses from the viewer that would help them better intuitively grasp the meaning behind the visualization. The final color scheme utilizes shades of red, green, and blue in an attempt to elicit corresponding emotional responses to three defined categories of income classes: "in need", "healthy", and "overabundance" (refer to Q & A section to learn more about the acknowledged inherit subjectivity of this created color scheme). Additionally, instead of using discrete cut off points to determine which income amount belonged to which corresponding color, gradients were used to better represent the continuous nature of income levels.
                </p>
                <p className="overlay-text">
                    One important aspect of each map’s color scheme was to take into consideration the range of each map’s median household income distribution. As shown below, because Taipei’s income disparity is quantifiably much less wide than New York City’s (the max income difference between the lowest and highest median household income in Taipei is ~2.6x vs. NYC’s ~10x), it would make reasonable sense to have a color scheme spectrum that is also less wide in comparison. The use of this type of color scheme also highlights the notion that Taipei’s income distribution appears to consist of more sub-districts with household incomes that fall into the categorical income class of “healthy”. Whereas, in the NYC map, many sub-districts could be considered to fall into the categorical classification of “in need” and “overabundance”.
                </p>
                <div className="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/legend_scale.jpg" style={{ width: isTablet_b ? "650px" : "100%", height: isTablet_b ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet_b ? "600px" : "100%", height: isTablet_b ? "auto" : "auto" }}> Differences in color scheme spectrum to match income distribution range
                        </p>
                    </div>
                </div>
                <p className="overlay-text">
                    Finally, four additional maps from other creators are displayed to give color scheme comparisons to the two maps created in this project.
                </p>

                <div id="full-size" class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/tmap1.jpg" style={{ width: isTablet ? "350px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet ? "350px" : "95%", height: isTablet ? "auto" : "auto" }}> Taipei color scheme created in this project
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/tmap2.jpg" style={{ padding: "auto", width: isTablet ? "350px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet ? "350px" : "95%", height: isTablet ? "auto" : "auto" }}>Map created by: <a href="https://www.thenewslens.com/article/26593" target="_blank">林佳賢, 關鍵評論網</a> [14]
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/tmap3.jpg" style={{ width: isTablet ? "350px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet ? "350px" : "95%", height: isTablet ? "auto" : "auto" }}>Map created by: <a href="https://missmoss.info/taipei-income-map/index.html" target="_blank">Miss Moss </a> [1]
                        </p>
                    </div>
                </div>
                <div id="full-size" class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/nmap1.jpg" style={{ width: isTablet ? "350px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet ? "350px" : "95%", height: isTablet ? "auto" : "auto" }}> NYC color scheme created in this project
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/nmap2.jpg" style={{ padding: "auto", width: isTablet ? "350px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet ? "350px" : "95%", height: isTablet ? "auto" : "auto" }}>Map created by: <a href="https://www.businessinsider.com/new-york-city-income-maps-2014-12" target="_blank">Andy Kiersz, Business Insider </a> [15]
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/nmap3.jpg" style={{ width: isTablet ? "350px" : "100%", height: isTablet ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet ? "350px" : "95%", height: isTablet ? "auto" : "auto" }}>Map created by: <a href="https://storymaps.arcgis.com/stories/a4328e9d4a1544ad92a7025fd4d670a0" target="_blank">Allen Carroll, Esri's StoryMaps </a> [16]
                        </p>
                    </div>
                </div>

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
                    In this research, quantifiable evidence was paired with empathetic storytelling to convey meaning to complex data related to income distribution. In the end, the evidence gathered appears to reveal that based on several different metrics, NYC possesses a significantly higher level of income disparity than Taipei. To supplement this quantifiable data, the use of more-subjective tools/information were utilized to provide additional details, such as color schemes, photographs, figures, and first-hand accounts.
                </p>
                <p className="overlay-text">
                    My overall hope is that this project will provide a different perspective to those who have accepted the belief that every large urban city possesses large income inequality, or to people who aren’t aware of the extreme income inequalities that exist in other developed country’s cities.
                </p>

                <h4 className="overlay-text">
                    Q & A  🙋‍♀️🙋‍♂️
                </h4>
                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q:</span> Why do the NYC and Taipei maps display areas that are not technically part of each city?
                    <br></br>
                    <span className="glow-text">A:</span> This decision was ultimately made because areas of one city bordering another city often share commonalities in lifestyle and resources with the city the area is bordering, thus blurring the lines of when a city begins and ends.
                </p>
                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q:</span> The color schemes and defined categories of income classes created don’t seem to represent the income distribution accurately. Is it possible that they are skewed or biased?
                    <br></br>
                    <span className="glow-text">A:</span> Although objective data sources were consulted when designing each map's color scheme and the three defined categories of income classes, it can certainly be said that subjective opinions were also utilized in this process as well. To be specific, it was realized that using objective sources alone, like each country's mean household income distribution by quintile were not enough to design a suitable color scheme. This is because more nuanced and complex variables would need to be taken into consideration, such as the subtle changes in the housing cost in different parts of a city, the poverty gap, the cost of living, etc. With that said, to improve the accuracy of the color schemes utilized in these maps, additional data and feedback from locals of each city is required. However, it may very well be impossible to develop a color scheme that captures excellent accuracy on all the dimensions it is trying to represent and to all viewers.
                </p>
                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q:</span> If the Taipei color scheme was influenced by the consideration of the NYC income distribution map, and the belief that Taipei has comparatively less income disparity, what would the color scheme of the Taipei map look if these considerations were not taken, and instead, the same color scheme from the NYC map was used?
                    <br></br>
                    <span className="glow-text">A:</span>
                    <div className="overlay-text-visual-container">
                        <img id="crisp" src="/website/images/ColorPalette/tmap_b.jpg" style={{ width: isTablet_b ? "600px" : "100%", height: isTablet_b ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isTablet_b ? "500px" : "95%", height: isTablet_b ? "auto" : "auto" }}> Alternate color scheme for the Taipei income distribution map
                        </p>
                    </div>
                </p>
                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q:</span> Why was the mean used for some figures, while the median was used for others?
                    <br></br>
                    <span className="glow-text">A:</span> Due to what types of data were available for each city and country, the utilization of slightly different data was required.
                </p>
                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q:</span> Is the possibility that Taipei has a less severe income disparity necessarily mean a good thing?
                    <br></br>
                    <span className="glow-text">A:</span> This is a question that I have pondered about quite extensively and believe it is incredibly difficult to answer. As expressed by many expats in Taipei, it certainly appears that there is far less homeless, crime, financial barriers to attending university, difficutly in accessing healthcare, and overall suffering due to income inequality in Taipei. However, as expressed by many Taiwanese, the salary wages in Taiwan are considered to be not high enough for people of various educational backgrounds and job industries.
                    <br></br>
                    It is difficult to pinpoint exactly how these two sentiments are directly connected to Taiwan and Taipei’s income distribution. One might posit that the economic situation in Taipei avoids the negative extremes of income inequality, but possibly at the cost of the overall population having a lower than desired income. If this truly is the case, whether this is a good thing depends on own's perspective.
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

export default ColorPalette