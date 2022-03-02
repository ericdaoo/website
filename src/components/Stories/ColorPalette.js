import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"
import tableau from "tableau-api"




const ColorPalette = (props) => {

    const elementRef = useRef();
    const elementRef2 = useRef();

    // useEffect(() => {
    //     initViz()
    // }, [])

    const options = {
        width: "800px",
        height: "500px",
        hideTabs: true,

    }

    const initViz = () => {
        const vizUrl = "https://public.tableau.com/views/NYCIncomeDisparity/NYCIncomeDisparityMap?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

    // const initViz2 = () => {
        const vizUrl2 = "https://public.tableau.com/views/TaipeiIncomeDisparity/TaipeiIncomeDisparityMap?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"


        const vizContainer = elementRef.current;
        let viz = new window.tableau.Viz(vizContainer, vizUrl, options)

        const vizContainer2 = elementRef2.current;
        let viz2 = new window.tableau.Viz(vizContainer2, vizUrl2, options)
    }

    return (
        <div className="overlay">
            <p className="overlay-exit"
                onClick={() => props.exitButtonProps(props.keyProps)}
            >
                <BiXCircle />
            </p>
            <div className="overlay-container">

                <div className="overlay-ref" style={{animation: "color-fade-2a 5s infinite alternate"}}>
                    <p className="ref-title">References</p>

                    <p className="ref-text">[1] United States Census Burueu, Median Income in the Past 12 Months (In 2019 Inflated-Adjusted Dollars</p>
                    <a className="ref-text" href="https://data.census.gov/cedsci/map?q=s1903&g=8600000US07002,07010,07020,07022,07024,07030,07047,07072,07086,07087,07093,07094,07302,07304,07305,07306,07307,07310,07311,07605,07620,07621,07626,07627,07628,07631,07632,07643,07657,07670,10001,10002,10003,10004,10005,10006,10007,10009,10010,10011,10012,10013,10014,10016,10017,10018,10019,10020,10021,10022,10023,10024,10025,10026,10027,10028,10029,10030,10031,10032,10033,10034,10035,10036,10037,10038,10039,10040,10044,10065,10069,10075,10103,10110,10111,10119,10128,10154,10162,10167,10168,10169,10170,10171,10172,10199,10280,10282,10305,10451,10452,10453,10454,10455,10456,10457,10458,10459,10460,10461,10462,10463,10464,10465,10466,10467,10468,10469,10470,10471,10472,10473,10474,10475,10502,10522,10523,10528,10530,10533,10538,10543,10550,10552,10553,10577,10580,10583,10601,10603,10604,10605,10606,10607,10701,10703,10704,10705,10706,10707,10708,10709,10710,10801,10803,10804,10805,11001,11003,11004,11005,11010,11020,11021,11023,11024,11030,11040,11042,11050,11096,11101,11102,11103,11104,11105,11106,11109,11201,11203,11204,11205,11206,11207,11208,11209,11210,11211,11212,11213,11214,11215,11216,11217,11218,11219,11220,11221,11222,11223,11224,11225,11226,11228,11229,11230,11231,11232,11233,11234,11235,11236,11237,11238,11239,11354,11355,11356,11357,11358,11359,11360,11361,11362,11363,11364,11365,11366,11367,11368,11369,11370,11371,11372,11373,11374,11375,11377,11378,11379,11385,11411,11412,11413,11414,11415,11416,11417,11418,11419,11420,11421,11422,11423,11424,11425,11426,11427,11428,11429,11430,11432,11433,11434,11435,11436,11451,11501,11507,11509,11516,11518,11530,11552,11557,11558,11559,11561,11563,11565,11570,11572,11576,11577,11580,11581,11596,11598,11691,11692,11693,11694,11697&tid=ACSST5Y2019.S1903&cid=S1903_C03_015E&vintage=2019&layer=VT_2020_860_00_PY_D1&palette=RdYlGn&break=9&mode=customize" target="_blank">Link</a>

                    <p></p>

                    <p className="ref-text"> [2] United States Census Burueu, Median Income in the Past 12 Months (In 2019 Inflated-Adjusted Dollars </p> 
                    <a className="ref-text" href="https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2020&layergroup=ZIP+Code+Tabulation+Areas" target="_blank">Link</a>

                    

                    
                </div>
        
                <h2 className="overlay-text" style={{animation: "color-fade-2a 2s infinite alternate"}}>Color Palette</h2>
                <h4 className="overlay-text">"I long had an unquestioned assumption that large cities naturally equate to large disparities. It wasn’t until I lived in Taipei did I learn that this is a myth that we merely acceptted as a society in the US."</h4>
                {/* <div ref={elementRef} className="overlay-visual"></div>

                <div ref={elementRef2} className="overlay-visual"></div> */}
                <p className="overlay-text">CANDIDE

                    In a castle of Westphalia, belonging to the Baron of Thunder-ten-Tronckh, lived a youth, whom nature had endowed with the most gentle manners. His countenance was a true picture of his soul. He combined a true judgment with simplicity of spirit, which was the reason, I apprehend, of his being called Candide. The old servants of the family suspected him to have been the son of the Baron's sister, by a good, honest gentleman of the neighborhood, whom that young lady would never marry because he had been able to prove only seventy-one quarterings, the rest of his genealogical tree having been lost through the injuries of time.

                    The Baron was one of the most powerful lords in Westphalia, for his castle had not only a gate, but windows. His great hall, even, was[Pg 2] hung with tapestry. All the dogs of his farm-yards formed a pack of hounds at need; his grooms were his huntsmen; and the curate of the village was his grand almoner. They called him "My Lord," and laughed at all his stories.

                    The Baron's lady weighed about three hundred and fifty pounds, and was therefore a person of great consideration, and she did the honours of the house with a dignity that commanded still greater respect. Her daughter Cunegonde was seventeen years of age, fresh-coloured, comely, plump, and desirable. The Baron's son seemed to be in every respect worthy of his father. The Preceptor Pangloss[1] was the oracle of the family, and little Candide heard his lessons with all the good faith of his age and character.

                    Pangloss was professor of metaphysico-theologico-cosmolo-nigology. He proved admirably that there is no effect without a cause, and that, in this best of all possible worlds, the Baron's castle was the most magnificent of castles, and his lady the best of all possible Baronesses.

                    "It is demonstrable," said he, "that things cannot be otherwise than as they are; for all being created for an end, all is necessarily for the best end. Observe, that the nose has been formed to bear spectacles—thus we have spectacles. Legs are visibly designed for stockings[Pg 3]—and we have stockings. Stones were made to be hewn, and to construct castles—therefore my lord has a magnificent castle; for the greatest baron in the province ought to be the best lodged. Pigs were made to be eaten—therefore we eat pork all the year round. Consequently they who assert that all is well have said a foolish thing, they should have said all is for the best."

                    Candide listened attentively and believed innocently; for he thought Miss Cunegonde extremely beautiful, though he never had the courage to tell her so. He concluded that after the happiness of being born of Baron of Thunder-ten-Tronckh, the second degree of happiness was to be Miss Cunegonde, the third that of seeing her every day, and the fourth that of hearing Master Pangloss, the greatest philosopher of the whole province, and consequently of the whole world.

                    One day Cunegonde, while walking near the castle, in a little wood which they called a park, saw between the bushes, Dr. Pangloss giving a lesson in experimental natural philosophy to her mother's chamber-maid, a little brown wench, very pretty and very docile. As Miss Cunegonde had a great disposition for the sciences, she breathlessly observed the repeated experiments of which she was a witness; she clearly perceived [Pg 4]the force of the Doctor's reasons, the effects, and the causes; she turned back greatly flurried, quite pensive, and filled with the desire to be learned; dreaming that she might well be a sufficient reason for young Candide, and he for her.

                    She met Candide on reaching the castle and blushed; Candide blushed also; she wished him good morrow in a faltering tone, and Candide spoke to her without knowing what he said. The next day after dinner, as they went from table, Cunegonde and Candide found themselves behind a screen; Cunegonde let fall her handkerchief, Candide picked it up, she took him innocently by the hand, the youth as innocently kissed the young lady's hand with particular vivacity, sensibility, and grace; their lips met, their eyes sparkled, their knees trembled, their hands strayed. Baron Thunder-ten-Tronckh passed near the screen and beholding this cause and effect chased Candide from the castle with great kicks on the backside; Cunegonde fainted away; she was boxed on the ears by the Baroness, as soon as she came to herself; and all was consternation in this most magnificent and most agreeable of all possible castles.[Pg 5]



                </p>
            </div>
        </div>
    )
}

export default ColorPalette