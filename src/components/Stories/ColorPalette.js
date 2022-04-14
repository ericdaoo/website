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

                    <p className="ref-text">
                        <span className="glow-text">[8] Taipei Photo 1:</span>
                        <br></br>
                        <i>Vernon Raineil Cenzon</i>
                        <br></br>
                        <a className="ref-text" href="https://unsplash.com/@thevernon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Link</a>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[9] Taipei Photo 2:</span>
                        <br></br>
                        <i>Ivan Hutomo</i>
                        <br></br>
                        <a className="ref-text" href="https://unsplash.com/@alexivaner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Link</a>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[10] Taipei Photo 3:</span>
                        <br></br>
                        <i>Eric BARBEAU</i>
                        <br></br>
                        <a className="ref-text" href="https://unsplash.com/@ericbarbeau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Link</a>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[11] Taipei Photo 4:</span>
                        <br></br>
                        <i>Markus Winkler</i>
                        <br></br>
                        <a className="ref-text" href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Link</a>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[12] Color Scheme Comparison 2:</span>
                        <br></br>
                        "你知道台灣的富人都住在哪裡嗎？ 7張圖表帶你看台灣六都「收入地圖」"
                        <br></br>
                        <i>林佳賢, 關鍵評論網</i>
                        <br></br>
                        <a className="ref-text" href="https://kiang.github.io/salary/map/#2019/playButton2/63000010027" target="_blank">Link</a>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[13] Color Scheme Comparison 3:</span>
                        <br></br>
                        "Here's A Block-By-Block Look At Who's Making How Much Across NYC's 5 Boroughs"
                        <br></br>
                        <i>Andy Kiersz, Business Insider</i>
                        <br></br>
                        <a className="ref-text" href="https://www.businessinsider.com/new-york-city-income-maps-2014-12" target="_blank">Link</a>
                    </p>

                    <p className="ref-text">
                        <span className="glow-text">[14] Color Scheme Comparison 4:</span>
                        <br></br>
                        "Wealth Divides"
                        <br></br>
                        <i>Allen Carroll, Esri's StoryMaps team</i>
                        <br></br>
                        <a className="ref-text" href="https://storymaps.arcgis.com/stories/a4328e9d4a1544ad92a7025fd4d670a0" target="_blank">Link</a>
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
                    I eventually stumbled upon an article discussing Taipei’s geographical income distribution [1], which challenged me to reevaluate just how progressive Taipei really is. The author used storytelling, government data, and visualizations to express how Taipei’s income disparity can be seen in comparatively low wages for even “long hour putting-white collar workers” and distinct city districts that are inhabited by the ultra wealthy. This made me question whether I had a view of Taipei that was a bit starry-eyed. At the same time though, my initial reaction to this article was that if the author believes Taipei is a city pervaded with extreme income inequality, they might be horrified to see what the situation is like in many US cities, especially New York City.
                </p>


                <h4 className="overlay-text">
                    Summary 📝
                </h4>
                <p className="overlay-text">
                    I had initially started this project to find an answer to the question of whether I could reveal quantifiable evidence showing the severity of income inequality in the US compared to Taiwan. As I progressed in my research, the topic of income inequality proved to consist of far too many complex and or unknown variables for me to desire to continue attempting to answer such a nuanced and complicated question. Instead, my end goal had shifted to presenting my data and posing open to debate hypotheses. In addition to this goal, I wanted to gain more insight into the important role that color schemes have in the interpretation of data visualizations.
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
                    Much of this research process involved searching for relevant and reputable data sources. In the end, public government data from each country were used. Once data was collected, Pandas  was utilized to clean and prepare the data to be brought into Tableau to create a one to one mapping between each city’s sub-district spatial area and median household income amount.
                </p>
                <p className="overlay-text">
                    It must be noted that the income data for Taipei households is based on “taxable households”, which includes both family households and non-family households together. Whereas, the household income data for New York City is divided into family households and non-family households separately. Because of this distinction, an average of these two NYC income data sources was taken, and a third map was created based on this averaging.
                </p>
                <p className="overlay-text">
                    Furthermore, several different color schemes were tested for the color palette mapping parameter in Tableau. This parameter determines how median income is represented in a color spectrum for each sub-district on the map. Selecting the appropriate color scheme for each map was a difficult task because it required the use of both quantifiable data and subjective opinion. The former of which, included referencing the mean household income by quintile for each country [6, 7]. Meanwhile, the latter, included choosing colors based on anticipated emotional responses to those colors. Futher details on the color schemes created are presented in the results section.
                </p>

                <h4 className="overlay-text">
                    Results 🧪
                </h4>
                <p className="overlay-text-b">
                    <b>1. Intensity of Income Inequality</b>
                </p>
                <p className="overlay-text">
                    The NYC maps appear to reveal that the range in median income between sub-districts is much wider than in Taipei. Specifically, the difference between the sub-district with the lowest median income and the highest median income in NYC is over 10x: US$20,000 vs. US$211,000  (Non-Family and Family Households Average). Whereas, in Taipei, the difference is, at most, about ~2.6x: NT$468k vs. NT$1,207k (taxable households).
                </p>
                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/nyc_intensity.jpg" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "450px" : "95%", height: isDesktop ? "auto" : "auto" }}>NYC Lowest and Highest Zip Code Median Income Difference (Average of Family and Non-Family Households) [3,5]</p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/taipei_intensity.jpg" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "450px" : "95%", height: isDesktop ? "auto" : "auto" }}>Taipei Lowest and Highest Village Median Income Difference (Taxable Households) [2,4]</p>
                    </div>
                </div>
                <br></br>
                <p className="overlay-text-b">
                    <b>2. Income Class Segregation</b>
                </p>
                <p className="overlay-text">
                    It is a possibility that in Taipei, residents of a wider range of income classes live in closer proximity to each other than in NYC. This is best illustrated by the fact that not a single sub-district within all of Taipei has medium income that falls into the country’s 5th / richest mean household income quintile. Whereas, in the NYC map, 72 out of the 336 (~21%) zip-codes fall within the US’ 5th / richest mean household income quintile.
                </p>
                <p className="overlay-text">
                    Putting aside numbers for a moment, this income class integration in Taipei can also be felt when wandering Xin'yi district / 信義區, the district some call the "Manhattan of Taipei". This district in Taipei possesses the highest sky-rises, luxury shopping centers and apartments, but at the same time still appears to be inhabited by everyday people of all income classes. This could explain why, despite the apparent prosperity in Xin'yi district, the median household income there is nevertheless, not incredibly high compared to other sub-districts in Taipei. Specifically, the majority of the sub-district's medium household incomes within Xin'yi district fall within Taiwan’s 3rd mean household income quintiles (the 3rd quintile is essentially the middle income class quintile). Whereas in NYC, the majority of sub-districts in downtown Manhattan have median household incomes that fall into the US’ 5th / richest mean household income quintile. Specifically, 12/15 or ~92% of zip codes fall into the 5th / richest mean household income quintile (Medium Non-Family and Family Households Income Average).
                </p>
                <p className="overlay-text">
                    The photographs below by various photographers were chosen to illustrate how Taipei's most affluent districts somehow still possess an interesting dichotomy between affluence and equity.
                </p>
                <div class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/vernon-raineil-cenzon-oi3i-KGp95A-unsplash.jpg" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "450px" : "95%", height: isDesktop ? "auto" : "auto" }}> Bird's eye view of Taipei's Xin'yi district <br></br>- Photo by <a href="https://unsplash.com/@thevernon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vernon Raineil Cenzon</a> [8]
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/ivan-hutomo-YMraIPFX8Bw-unsplash.jpg" style={{ padding: "auto", width: isDesktop ? "300px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "300px" : "95%", height: isDesktop ? "auto" : "auto" }}>Taipei 101 <br></br>- Photo by <a href="https://unsplash.com/@alexivaner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Hutomo</a> [9]
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/eric-barbeau-rJ1igIZDcAI-unsplash.jpg" style={{ width: isDesktop ? "500px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "450px" : "95%", height: isDesktop ? "auto" : "auto" }}>Da'an district, another affluent district in Taipei that often feels like it's inhabited by everday people of all income classes<br></br>- Photo by <a href="https://unsplash.com/@ericbarbeau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eric BARBEAU</a> [10]
                        </p>
                    </div>

                    <div className="overlay-text-visual-container">
                        <img src="/website/images/markus-winkler-hkCVGNHBmow-unsplash.jpg" style={{ width: isDesktop ? "300px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "300px" : "95%", height: isDesktop ? "auto" : "auto" }}>Taipei 101 behind an old apartment building (some people poke fun at Taipei's worn down buildings, but I personally feel it gives character)<br></br>- Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a> [11]
                        </p>
                    </div>
                </div>
                <p className="overlay-text-b">
                    <b>3. Color Schemes</b>
                </p>
                <p className="overlay-text">
                    As mentioned in the methodology section of this page, an extensive amount of time was spent experimenting with various color schemes to suit each  map visualization. The goal of which was to find a color scheme that was both accurate to the data and which could naturally elicit particular responses from the viewer that would help them better intuitively grasp the meaning behind the visualization. The final color scheme utilizes shades of red, green, and blue in an attempt to elicit corresponding emotional responses to three categories of income classes: "in need", "healthy", and "overabundance". Additionally, instead of using discrete cut off points to determine which income amount belonged to which corresponding color, gradients were used to better represent the continuous nature of income levels.
                </p>
                <p className="overlay-text">
                    One important aspect of each map’s color scheme was to take into consideration the range of each map’s median household income distribution. As shown below, because Taipei’s income disparity is quantifiably much less wide than New York City’s (the max income difference between the lowest and highest median household income in Taipei is ~2.6x vs. NYC’s ~10x), it would make reasonable sense to have a color scheme spectrum that is also less wide in comparison. This also highlights the notion that Taipei’s income distribution appears to consist of more household incomes that fall into the categorical income class of “healthy”. Whereas, in the NYC map, many sub-districts in the map could be considered to fall into the categorical classification of “in need” and “overabundance”.
                </p>
                <div className="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/legend_scale.jpg" style={{ width: isDesktop ? "550px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "500px" : "100%", height: isDesktop ? "auto" : "auto" }}> Color scheme spectrum difference
                        </p>
                    </div>
                </div>
                <p className="overlay-text">
                    Finally, four additional maps from other creators are displayed to give color scheme comparisons to the two maps created in this project.
                </p>

                <div id="full-size" class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/tmap1.jpg" style={{ width: isDesktop ? "350px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "350px" : "95%", height: isDesktop ? "auto" : "auto" }}> Color scheme created in this project
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/tmap2.jpg" style={{ padding: "auto", width: isDesktop ? "350px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "350px" : "95%", height: isDesktop ? "auto" : "auto" }}>Map created by: <a href="https://www.thenewslens.com/article/26593">林佳賢, 關鍵評論網 </a> [12]
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/tmap3.jpg" style={{ width: isDesktop ? "350px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "350px" : "95%", height: isDesktop ? "auto" : "auto" }}>Map created by: <a href="https://missmoss.info/taipei-income-map/index.html">Miss Moss </a> [1]
                        </p>
                    </div>
                </div>
                <div id="full-size" class="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/nmap1.jpg" style={{ width: isDesktop ? "350px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "350px" : "95%", height: isDesktop ? "auto" : "auto" }}> Color scheme created in this project
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/nmap2.jpg" style={{ padding: "auto", width: isDesktop ? "350px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "350px" : "95%", height: isDesktop ? "auto" : "auto" }}>Map created by: <a href="https://www.businessinsider.com/new-york-city-income-maps-2014-12">Andy Kiersz, Business Insider </a> [13]
                        </p>
                    </div>
                    <div className="overlay-text-visual-container">
                        <img src="/website/images/nmap3.jpg" style={{ width: isDesktop ? "350px" : "100%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ padding: "auto", width: isDesktop ? "350px" : "95%", height: isDesktop ? "auto" : "auto" }}>Map created by: <a href="https://storymaps.arcgis.com/stories/a4328e9d4a1544ad92a7025fd4d670a0">Allen Carroll, Esri's StoryMaps </a> [14]
                        </p>
                    </div>
                </div>
                <h4 className="overlay-text">
                    Summary 🪢
                </h4>
                <p className="overlay-text">

                </p>

                <h4 className="overlay-text">
                    Q & A  🎤
                </h4>
                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q:</span> Why do the NYC and Taipei maps display areas that are not technically part of each city?
                    <br></br>
                    <span className="glow-text">A:</span> This decision was ultimately made because areas of one city bordering another city often share commonalities in lifestyle and resources with the city the area is bordering, thus blurring the lines of when a city begins and ends.
                </p>
                <p id="q-a" className="overlay-text">
                <span className="glow-text">Q:</span> The color schemes chosen don’t seem to represent the income distribution accurately. Is it possible that they are skewed or biased?
                    <br></br>
                    <span className="glow-text">A:</span> It can certainly be said that to improve the accuracy of the color schemes utilized in these maps, additional data and feedback from locals of each city is required. However, it may very well  be impossible to develop a color scheme that captures excellent accuracy on all the dimensions it is trying to represent and to all viewers.
                </p>


                <p>In Progress</p>

            </div>


        </div>
    )
}

export default ColorPalette