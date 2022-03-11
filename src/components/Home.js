import React, { useState, useEffect } from "react"
import StoriesList from "./StoriesList"
import { v4 as uuidv4 } from "uuid"
import { IoLogoOctocat } from "react-icons/io5"


const Home = () => {


    const [catList, setCatList] = useState([
        {
            id: uuidv4(),
            cat: "calico",
            greeting: "Hii",
            font: '"Pacifico", cursvie',
            fontSize: "9em",
            marginTop: "0em",
            color: "#3ce7df",
            animationName: "upCat"
        },
        {
            id: uuidv4(),
            cat: "orange",
            color: "#acf18b",
            greeting: "Coucou",
            fontSize: "9em",
            marginTop: "0em",
            font: '"Sacramento", cursive',
            animationName: "upCat2"
        },
        {
            id: uuidv4(),
            cat: "siamese",
            greeting: "哩賀",
            font: '"HanyiSentyBubbleTea", cursive',
            fontSize: "9em",
            marginTop: "0em",
            color: "#e959ff",
            animationName: "upCat3"
        },
        {
            id: uuidv4(),
            cat: "black",
            greeting: "Hello",
            font: '"Pacifico", cursive',
            fontSize: "8em",
            marginTop: "0em",
            color: "#fc796f",
            animationName: "upCat4"
        },
        {
            id: uuidv4(),
            cat: "tabby",
            greeting: "Bonjour",
            font: '"Dancing Script", cursive',
            fontSize: "8em",
            marginTop: "0em",
            color: "#39bafa",
            animationName: "upCat5"
        },
        {
            id: uuidv4(),
            cat: "white",
            greeting: "妳好",
            font: '"HanyiSentyBubbleTea", cursive',
            fontSize: "10em",
            marginTop: "0em",
            color: "#aa80ff",
            animationName: "upCat6"
        }
    ])

//     font-family: 'Cookie', cursive;
// font-family: 'Dancing Script', cursive;
// font-family: 'Pacifico', cursive;
// font-family: 'Parisienne', cursive;
// font-family: 'Sacramento', cursive;
// font-family: 'Ubuntu', sans-serif;

    const [currentCat, setCurrentCat] = useState(0)


        useEffect(() => {
        const interval = setInterval(() => {
            catLogic();
        }, 5000);
    
        return () => clearInterval(interval);
      }, [currentCat]);


    const catLogic = () => {
        if (currentCat < (catList.length - 1)) {
            setCurrentCat(prevCat => prevCat + 1)
        } else {
            setCurrentCat(0)
        }
    }





    return (
        <div className="home" id="home"> 
            <ul className="color-bar">
                <li className="color-bar-item">
                    <IoLogoOctocat style={{color: "#fcc288"}}
                        onClick={() => setCurrentCat(0)}/>
                </li>
                <li className="color-bar-item">
                    <IoLogoOctocat style={{color: "#fab048"}}
                    onClick={() => setCurrentCat(1)}/>
                </li>
                <li className="color-bar-item">
                    <IoLogoOctocat style={{color: "#ebd9b5"}}
                    onClick={() => setCurrentCat(2)}/>
                </li>
                <li className="color-bar-item">
                    <IoLogoOctocat style={{color: "#3b3b3b"}}
                    onClick={() => setCurrentCat(3)}/>
                </li>
                <li className="color-bar-item">
                    <IoLogoOctocat style={{color: "#a68e65"}}
                    onClick={() => setCurrentCat(4)}/>
                </li>
                <li className="color-bar-item">
                    <IoLogoOctocat style={{color: "#ffffff"}}
                    onClick={() => setCurrentCat(5)}/>
                </li>
            </ul>
            <h1 className="greeting calico" style={ (currentCat === 0) ? {display:"block"} : {display:"none"}}>Hi</h1>
            <h1 className="greeting orange" style={ (currentCat === 1) ? {display:"block"} : {display:"none"}}>Coucou</h1>
            <h1 className="greeting siamese" style={ (currentCat === 2) ? {display:"block"} : {display:"none"}}>哩賀</h1>
            <h1 className="greeting black" style={ (currentCat === 3) ? {display:"block"} : {display:"none"}}>Hello</h1>
            <h1 className="greeting tabby" style={ (currentCat === 4) ? {display:"block"} : {display:"none"}}>Bonjour</h1>
            <h1 className="greeting white" style={ (currentCat === 5) ? {display:"block"} : {display:"none"}}>妳好</h1>

<h4 className="title">Welcome to my personal site. This is where I display previous projects that I have worked on.</h4>
<h4 className="home-name">- Eric</h4>
        <div className="cat-container">
        <div className="img-wrapper">
                <img src="/images/calico.png" className="cat-img" style={(currentCat === 0) ? {display: "block", animationName:"upCat"} : {display:"none"}}></img>
                <img src="/images/orange.png" className="cat-img" style={(currentCat === 1) ? {display: "block", animationName:"upCat2"} : {display:"none"}}></img>
                <img src="/images/siamese.png" className="cat-img" style={(currentCat === 2) ? {display: "block", animationName:"upCat3"} : {display:"none"}}></img>
                <img src="/images/black.png" className="cat-img" style={(currentCat === 3) ? {display: "block", animationName:"upCat4"} : {display:"none"}}></img>
                <img src="/images/tabby.png" className="cat-img" style={(currentCat === 4) ? {display: "block", animationName:"upCat"} : {display:"none"}}></img>
                <img src="/images/white.png" className="cat-img" style={(currentCat === 5) ? {display: "block", animationName:"upCat6"} : {display:"none"}}></img>
        
                <img src="/images/calico_bg.png" className="cat_bg" style={ (currentCat === 0) ? {display:"block"} : {display:"none"}}></img>
                <img src="/images/orange_bg.png" className="cat_bg" style={ (currentCat === 1) ? {display:"block"} : {display:"none"}}></img>
                <img src="/images/siamese_bg.png" className="cat_bg" style={ (currentCat === 2) ? {display:"block"} : {display:"none"}}></img>
                <img src="/images/black_bg.png" className="cat_bg" style={ (currentCat === 3) ? {display:"block"} : {display:"none"}}></img>
                <img src="/images/tabby_bg.png" className="cat_bg" style={ (currentCat === 4) ? {display:"block"} : {display:"none"}}></img>
                <img src="/images/white_bg.png" className="cat_bg" style={ (currentCat === 5) ? {display:"block"} : {display:"none"}}></img>
        </div>
        </div> 
        
        </div>
    )
};

export default Home