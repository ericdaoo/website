import React, { useState, useEffect } from "react"

const About = () => {
    return (
        <div className="about" id="about">
            <h2 className="line-color"> About</h2>
            <div className="about-container">
                <img style={{ borderRadius: "1em" }} className="about-img" src={"/website/images/about_photo.jpg"}></img>
                <div className="bio">
                    <h4>Hi, my name is Eric,</h4>
                    <p className="bio-text">If my dog were to describe me, he probably would immediately start off by going on a tangent and trying to convince you to tell me to make an illustration of him like I did for the cats above.</p>
                    <p></p>
                    <p className="bio-text">Okay, jokes aside, I'd say that I'm the type of person that likes to learn and try new things. This can be reflected in my educational background: psychology and computer science; the cities I have lived in: Philadelphia, Shanghai, Taipei, Lyon and New York; and also my hobbies: language exchange, Muay Thai, jiu-jitsu, photography, making illustrations, coding, and learning more about different cultures.</p>
                    <p></p>
                    <br></br>
                    <p className="bio-text">My website is still a work in progress, but thank you for visiting 🙂.</p>

                </div>

            </div>
        </div>
    )
};

export default About