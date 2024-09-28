import React, { useState, useEffect } from "react"
import StoriesList from "./StoriesList"
import { BiSun, BiMoon } from "react-icons/bi"
import { IoMusicalNotes } from "react-icons/io5"


const NavBar = () => {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.style.setProperty("--background-1", "#001c40")
            document.documentElement.style.setProperty("--background-2", "#000000")
            document.documentElement.style.setProperty("--color-1", "#88b5fc")
            document.documentElement.style.setProperty("--color-2", "#ecf4ff")
            document.documentElement.style.setProperty("--color-3", "rgba(255, 255, 255, 0.100)") /*Story item bg color*/
        } else {
            setTheme("light");
            document.documentElement.style.setProperty("--background-1", "#fffdf9")
            document.documentElement.style.setProperty("--background-2", "#fdf8f0")
            document.documentElement.style.setProperty("--color-1", "#2e5fa8")
            document.documentElement.style.setProperty("--color-2", "#122747")
            document.documentElement.style.setProperty("--color-3", "#0c152e")


        }
    }




    const [music, setMusic] = useState(false)

    const musicHandler = () => {
        setMusic(prevState => {
            return !prevState
        })
    }

    let viewHide = "none"

    if (music) {
        viewHide = "block"
    } else {
        viewHide = "none"
    }


    return (
        <div className="nav-container">
            <div className="bar-container">

                <div className="nav-bar-container">
                    <ul className="nav-bar">
                        <li className="nav-bar-item">
                            <a href="#home">Home</a>
                        </li>
                        <li className="nav-bar-item">
                            <a href="#stories">Stories</a>
                        </li>
                        <li className="nav-bar-item">
                            <a href="#about">About</a>
                        </li>
                        <li className="nav-bar-item">
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-bar-item">
                            {(theme === "dark") ? <BiSun
                                onClick={toggleTheme}
                                className="dark-light-mode" /> : null}
                            {(theme === "light") ? <BiMoon
                                style={{ fontSize: "1.7em" }}
                                onClick={toggleTheme}
                                className="dark-light-mode" /> : null}
                        </li>
                        <li className="nav-bar-item">
                            <IoMusicalNotes
                                className="music-icon"
                                onClick={() => musicHandler()} />
                        </li>
                    </ul>
                </div>
                <iframe className="spotify-box" style={{ display: viewHide }} src="https://open.spotify.com/embed/playlist/4UHfMjZQSnBKyUvWkisda8?utm_source=generator" width="300px" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>
    )

}


export default NavBar