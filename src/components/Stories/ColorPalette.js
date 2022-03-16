import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"
import { VscReferences } from "react-icons/vsc";
import tableau from "tableau-api"




const ColorPalette = (props) => {
    const isDesktop = window.innerWidth > 900 ? true : false
  
    const [ref, setRef] = useState(isDesktop)
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
        hideTabs: true,

    }

    const initViz = () => {
        const vizUrl = "https://public.tableau.com/views/NYCIncomeDisparity/NYCIncomeDisparityMap?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl2 = "https://public.tableau.com/views/TaipeiIncomeDisparity/TaipeiIncomeDisparityMap?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"


        const vizContainer = elementRef.current;
        let viz = new window.tableau.Viz(vizContainer, vizUrl, options)

        const vizContainer2 = elementRef2.current;
        let viz2 = new window.tableau.Viz(vizContainer2, vizUrl2, options)
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

                    <p className="ref-text">[1] United States Census Burueu, Median Income in the Past 12 Months (In 2019 Inflated-Adjusted Dollars</p>
                    <p className="ref-text"> <a className="ref-text" href="https://data.census.gov/cedsci/map?q=s1903&g=8600000US07002,07010,07020,07022,07024,07030,07047,07072,07086,07087,07093,07094,07302,07304,07305,07306,07307,07310,07311,07605,07620,07621,07626,07627,07628,07631,07632,07643,07657,07670,10001,10002,10003,10004,10005,10006,10007,10009,10010,10011,10012,10013,10014,10016,10017,10018,10019,10020,10021,10022,10023,10024,10025,10026,10027,10028,10029,10030,10031,10032,10033,10034,10035,10036,10037,10038,10039,10040,10044,10065,10069,10075,10103,10110,10111,10119,10128,10154,10162,10167,10168,10169,10170,10171,10172,10199,10280,10282,10305,10451,10452,10453,10454,10455,10456,10457,10458,10459,10460,10461,10462,10463,10464,10465,10466,10467,10468,10469,10470,10471,10472,10473,10474,10475,10502,10522,10523,10528,10530,10533,10538,10543,10550,10552,10553,10577,10580,10583,10601,10603,10604,10605,10606,10607,10701,10703,10704,10705,10706,10707,10708,10709,10710,10801,10803,10804,10805,11001,11003,11004,11005,11010,11020,11021,11023,11024,11030,11040,11042,11050,11096,11101,11102,11103,11104,11105,11106,11109,11201,11203,11204,11205,11206,11207,11208,11209,11210,11211,11212,11213,11214,11215,11216,11217,11218,11219,11220,11221,11222,11223,11224,11225,11226,11228,11229,11230,11231,11232,11233,11234,11235,11236,11237,11238,11239,11354,11355,11356,11357,11358,11359,11360,11361,11362,11363,11364,11365,11366,11367,11368,11369,11370,11371,11372,11373,11374,11375,11377,11378,11379,11385,11411,11412,11413,11414,11415,11416,11417,11418,11419,11420,11421,11422,11423,11424,11425,11426,11427,11428,11429,11430,11432,11433,11434,11435,11436,11451,11501,11507,11509,11516,11518,11530,11552,11557,11558,11559,11561,11563,11565,11570,11572,11576,11577,11580,11581,11596,11598,11691,11692,11693,11694,11697&tid=ACSST5Y2019.S1903&cid=S1903_C03_015E&vintage=2019&layer=VT_2020_860_00_PY_D1&palette=RdYlGn&break=9&mode=customize" target="_blank">Link</a></p>

                    <p></p>

                    <p className="ref-text"> [2] United States Census Burueu, Median Income in the Past 12 Months (In 2019 Inflated-Adjusted Dollars </p>
                    <p className="ref-text"><a className="ref-text" href="https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2020&layergroup=ZIP+Code+Tabulation+Areas" target="_blank">Link</a></p>




                </div>

                <h2 className="overlay-text">Color Palette</h2>
                <div className="overlay-text">
                    <h4 className="overlay-quote">"I long had an unquestioned assumption that large cities naturally equate to large income disparities. It wasn’t until I lived in Taipei did I realize that this was a myth"</h4> </div>

                <h4 className="overlay-text">
                    Summary
                </h4>
                <p className="overlay-text">
                    I had initially started this project to find an answer to the question of whether I could reveal quantifiable evidence that the US has more income inequality than Taiwan. In spite of trying my best to narrow the scope of this project, the topic of income inequality proved to consist of too many complex and or unknown variables to be able to confidently state that the evidence I had found indeed supports my hypothesis that US has far more severe income inequality than Taiwan. However, despite this, in addition to learning much more about these two cities and these country’s income distributions, I had gained valuable insight into how powerful color schemes are in the interpretation of data visualizations.
                </p>

                <h4 className="overlay-text">
                    Final Visualization
                </h4>

                <div ref={elementRef} className="overlay-visual"></div>
                <div ref={elementRef2} className="overlay-visual"></div>

                <h4 className="overlay-text">
                    Inspiration
                </h4>

                <p className="overlay-text">CANDIDE

                    In a castle of Westphalia, belonging to the Baron of Thunder-ten-Tronckh, lived a youth, whom nature had endowed with the most gentle manners. His countenance was a true picture of his soul. He combined a true judgment with simplicity of spirit, whichå was the reason, I apprehend, of his being called Candide. The old servants of the family suspected him to have been the son of the Baron's sister, by a good, honest gentleman of the neighborhood, whom that young lady would never marry because he had been able to prove only seventy-one quarterings, the rest of his genealogical tree having been lost through the injuries of time.
                </p>
                <p className="overlay-text">
                    The Baron was one of the most powerful lords in Westphalia, for his castle had not only a gate, but windows. His great hall, even, was[Pg 2] hung with tapestry. All the dogs of his farm-yards formed a pack of hounds at need; his grooms were his huntsmen; and the curate of the village was his grand almoner. They called him "My Lord," and laughed at all his stories.
                </p>
            </div>
        </div>
    )
}

export default ColorPalette