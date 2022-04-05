import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import ColorPalette from "./Stories/ColorPalette"
import Convey from "./Stories/Convey"
import { BsArrowDownSquare } from "react-icons/bs";


const StoriesList = () => {
    const [stories, setStories] = useState([
        {
            id: uuidv4(),
            show: false,
            title: "Color Palette",
            emoji: "🎨",
            state: "[almost finished]",
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
            state: "[in progress]",
            theme: "Music, Mandarin, English",
            tools: "Python, Web-Scraping, Natural Language Processing, Tableau",
            color: "color-fade-2b 5s infinite alternate",
            iconFade: "icon-fade 5s infinite alternate"
        },
        {
            id: uuidv4(),
            title: "Bork Bork",
            emoji: "🐶",
            state: "[in progress]",
            theme: "Security in Websites (Prevent SQL Injections, DOS attacks), Dogs in Taiwan",
            tools: "Node.js, Express.js (REST API), OAUTH authentication, SQL, JSON Web Tokens",
            color: "color-fade-2c 5s infinite alternate",
            iconFade: "icon-fade 5s infinite alternate"
        },
        {
            id: uuidv4(),
            title: "Master's Thesis",
            emoji: "🔬",
            state: "[in progress]",
            theme: "Cybercrime (E-commerce Scam Websites), Taiwan, China",
            tools: "Python, Data Mining, Website Metadata, Pandas, NLP, Sci-kit Machine Learning",
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




    return (
        <div className="stories" id="stories">
            <div className="story-arrow" >
                <BsArrowDownSquare />
            </div>
            <h2 className="line-color" style={{ marginTop: "2em" }}> Stories</h2>
            <div className="story-list-container" >

                {stories[0].show ? <ColorPalette
                    exitButtonProps={exitButton}
                    keyProps={stories[0].id}
                /> : null}

                {stories[1].show ? <Convey
                    exitButtonProps={exitButton}
                    keyProps={stories[1].id}
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
        </div>

    )
};

export default StoriesList