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

    const [ref, setRef] = useState(false)

    const vizContainer0 = useRef();

    const options = {
        width: "0px",
        height: "0px",
        hideTabs: true
    }

    const initViz0 = () => {
        const vizUrl = "https://public.tableau.com/views/songs_16325391595330/FeelingsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link" // Testing to see if this can be a temporary fix for the api not working the first time its called.
    
        let viz0 = new tableau.Viz(vizContainer0.current, vizUrl, options)
    }
    
    useEffect(() => {
        initViz0()
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
            <div style={{ visibility: "hidden" }} ref={vizContainer0}></div>
        </div>

    )
};

export default StoriesList