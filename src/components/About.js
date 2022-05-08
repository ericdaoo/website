import React, { useState, useEffect } from "react"

const About = () => {
    return (
        <div className="about" id="about">
            <h2 className="line-color"> About</h2>
            <div className="about-container">
                <img style={{ borderRadius: "1em" }} className="about-img" src={"/website/images/about_photo.jpg"}></img>
                <div className="bio">
                    <h4>Hi, my name is Eric,</h4>
                    <p className="bio-text">If my dog were to describe me, he probably would start off by saying that he's still not over that I had left him to travel abroad. He then, would probably try to convince you to tell me to make an illustration of him like I did for the cats above.</p>
                    <p></p>
                    <p className="bio-text">Okay, jokes aside, I'd say that I'm the type of person that likes to try and learn new things. This can be reflected in my educational background; psychology and computer science. The cities I have lived in: Philadelphia, Shanghai, Taipei, and Lyon. And, also my hobbies: language exchange, Muay Thai, jiu-jitsu, photography, making illustrations, coding, and learning more about different cultures.</p>
                    <p></p>
                    <br></br>
                    <p className="bio-text">My website is still a work in progress, but thank you for visiting 🙂.</p>

                </div>

            </div>
        </div>
    )
};

export default About