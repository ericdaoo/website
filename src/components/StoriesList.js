import React, { useState, useEffect, useRef } from "react"
import { v4 as uuidv4 } from "uuid"
import ColorPalette from "./Stories/ColorPalette"
import LyricsAndLanguage from "./Stories/LyricsAndLanguage"
import BorkBork from "./Stories/BorkBork"
import MastersThesis from "./Stories/MastersThesis"
import { BsArrowDownSquare } from "react-icons/bs";
const { tableau } = window;


const StoriesList = () => {
    const [stories, setStories] = useState([
        {
            id: uuidv4(),
            show: false,
            title: "Color Palette",
            emoji: "🎨",
            state: "[New]",
            theme: "Maps, Income Disparity, Color Influence, Taiwan, US",
            tools: "Tableau, Python, Pandas, Qlik",
            color: "color-fade-2a 5s infinite alternate",
            iconFade: "icon-fade 5s infinite alternate"
        },
        {
            id: uuidv4(),
            show: false,
            title: "Lyrics & Language",
            emoji: "🎶",
            state: "[New]",
            theme: "Music, Mandarin, English",
            tools: "Python, Web-Scraping, Natural Language Processing, Tableau",
            color: "color-fade-2b 5s infinite alternate",
            iconFade: "icon-fade 5s infinite alternate"
        },
        {
            id: uuidv4(),
            title: "Bork Bork",
            emoji: "🐶",
            state: "[Completed]",
            theme: "Security in Websites (Prevention of SQL Injections, DOS attacks, etc.), Dogs in Taiwan",
            tools: "Node.js, Express.js (REST API), OAUTH authentication, SQL, JSON Web Tokens",
            color: "color-fade-2c 5s infinite alternate",
            iconFade: "icon-fade 5s infinite alternate"
        },
        {
            id: uuidv4(),
            title: "Master's Thesis",
            emoji: "🔬",
            state: "[Completed]",
            theme: "Cybercrime (E-commerce Scam Websites), Taiwan, China",
            tools: "Python, Data Mining, Web scraping, Pandas, NLP, Sci-kit Machine Learning",
            color: "color-fade-2d 5s infinite alternate",
            iconFade: "icon-fade 5s infinite alternate"
        }

    ])


    const storyHandler = (id) => {
        setStories(prevState =>
            prevState.map(story => {
                if ((story.id === id) && story.state !== "[in progress]") {
                    document.body.style.overflowY = "hidden";
                    return {
                        ...story,
                        show: true
                    }
                }
                return story
            })
        )

    }


    const exitButton = (id) => {
        setStories(prevState =>
            prevState.map(story => {
                if (story.id === id) {
                    return {
                        ...story,
                        show: false
                    }
                }
                return story
            })
        )
        document.body.style.overflowY = "auto";
    }

    // const elementRef1 = useRef();
    // const elementRef2 = useRef();
    // const elementRef3 = useRef();
    // const elementRef4 = useRef();
    // const elementRef5 = useRef();
    // const elementRef6 = useRef();
    // const elementRef7 = useRef();
    // const elementRef8 = useRef();
    // const elementRef9 = useRef();
    // const elementRef10 = useRef();
    // const elementRef11 = useRef();


    const options = {
        width: "0px",
        height: "0px",
        hideTabs: true
    }
 // Testing to see if this can be a temporary fix for the api not working the first time its called.
    const initViz = () => {
        // const vizUrl1 = "https://public.tableau.com/views/NYCIncomeDistribution/Average?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl2 = "https://public.tableau.com/views/TaipeiIncomeDistribution/TaxableHouseholds?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl3 = "https://public.tableau.com/views/income_16329690336040/USMeanIncome_1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl4 = "https://public.tableau.com/views/income_16329690336040/TaiwanMeanIncome_1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl5 = "https://public.tableau.com/views/songs_16325391595330/FeelingsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl6 = "https://public.tableau.com/views/songs_16325391595330/FeelingsTW?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl7 = "https://public.tableau.com/views/songs_16325391595330/PronounsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl8 = "https://public.tableau.com/views/songs_16325391595330/PronounsTW?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl9 = "https://public.tableau.com/views/songs_16325391595330/TopicsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl10 = "https://public.tableau.com/views/songs_16325391595330/TopicsTW?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        // const vizUrl11 = "https://public.tableau.com/views/songs_16325391595330/ProfanityUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
    
        // const vizContainer1 = elementRef1.current;
        // let viz1 = new tableau.Viz(vizContainer1, vizUrl1, options)

        // const vizContainer2 = elementRef2.current;
        // let viz2 = new tableau.Viz(vizContainer2, vizUrl2, options)

        // const vizContainer3 = elementRef3.current;
        // let viz3 = new tableau.Viz(vizContainer3, vizUrl3, options)

        // const vizContainer4 = elementRef4.current;
        // let viz4 = new tableau.Viz(vizContainer4, vizUrl4, options)

        // const vizContainer5 = elementRef5.current;
        // let viz5 = new tableau.Viz(vizContainer5, vizUrl5, options)

        // const vizContainer6 = elementRef6.current;
        // let viz6 = new tableau.Viz(vizContainer6, vizUrl6, options)

        // const vizContainer7 = elementRef7.current;
        // let viz7 = new tableau.Viz(vizContainer7, vizUrl7, options)

        // const vizContainer8 = elementRef8.current;
        // let viz8 = new tableau.Viz(vizContainer8, vizUrl8, options)

        // const vizContainer9 = elementRef9.current;
        // let viz9 = new tableau.Viz(vizContainer9, vizUrl9, options)

        // const vizContainer10 = elementRef10.current;
        // let viz10 = new tableau.Viz(vizContainer10, vizUrl10, options)

        // const vizContainer11 = elementRef11.current;
        // let viz11 = new tableau.Viz(vizContainer11, vizUrl11, options)

    }
    
    useEffect(() => {
        initViz()
    }, [])


    return (
        <div className="stories" id="stories">
            <div className="story-arrow" >
                <BsArrowDownSquare />
            </div>
            <h2 className="line-color" style={{ marginTop: "2em" }}> Stories</h2>
            <p style={{fontSize: "1em", color: "#5187b8"}}>&nbsp;&nbsp;(Stories are best viewed on a desktop computer)</p>
            <div className="story-list-container" >

                {stories[0].show ? <ColorPalette
                    exitButtonProps={exitButton}
                    keyProps={stories[0].id}
                /> : null
                }

                {stories[1].show ? <LyricsAndLanguage
                    exitButtonProps={exitButton}
                    keyProps={stories[1].id}
                /> : null}

                {stories[2].show ? <BorkBork
                    exitButtonProps={exitButton}
                    keyProps={stories[2].id}
                /> : null}

                {stories[3].show ? <MastersThesis
                    exitButtonProps={exitButton}
                    keyProps={stories[3].id}
                /> : null}

                <ul className="story-list">
                    {stories.map(story => (
                        <div className="story-item"
                            key={story.id}
                            style={{ animation: story.color }}
                            onClick={() => storyHandler(story.id)}>
                            <p className="story-title" style={{ animation: story.color }}>{story.title}</p>
                            <div className="story-emoji-container">
                                <h2 className="story-emoji-contents" key={story.id} style={{ animation: story.iconFade }} >{story.emoji}</h2>
                                <p className="story-emoji-contents" style={{ animation: story.color }}>{story.state}</p>
                            </div>
                            <p className="story-header" style={{ animation: story.color }}>Themes</p>
                            <p className="story-theme" style={{ animation: story.color }}>{story.theme} </p>
                            {/* <br></br> */}
                            <p className="story-header" style={{ animation: story.color }}>Tools</p>
                            <p className="story-tools" style={{ animation: story.color }}>{story.tools}</p>
                        </div>
                    ))}
                </ul>
            </div>
                {/* <div style={{ visibility: "hidden" }} ref={elementRef1}></div>
                <div style={{ visibility: "hidden" }} ref={elementRef2}></div>
                <div style={{ visibility: "hidden" }} ref={elementRef3}></div>
                <div style={{ visibility: "hidden" }} ref={elementRef4}></div> */}
                {/* <div ref={elementRef5}></div>
                <div ref={elementRef6}></div>
                <div ref={elementRef7}></div>
                <div ref={elementRef8}></div>
                <div ref={elementRef9}></div>
                <div ref={elementRef10}></div>
                <div ref={elementRef11}></div> */}
                {/* <div ref={vizContainer5}></div>
                <div ref={vizContainer6}></div>
                <div ref={vizContainer7}></div>
                <div ref={vizContainer8}></div>
                <div ref={vizContainer9}></div> */}
        </div>

    )
};

export default StoriesList