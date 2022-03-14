import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

const Gallery = () => {
    const [photos, setPhotos] = useState([
        {
            id: uuidv4(),
            title: <p>Center City Skyline<br></br>Philadelphia, USA 🇺🇸</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/philly.jpg",
        },
        {
            id: uuidv4(),
            title: <p>東方明珠<br></br>(The Oriental Pearl Tower)<br></br>Shanghai, China 🐼</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/東方明珠.png",
        },
        {
            id: uuidv4(),
            title: <p>七星山<br></br>(Shichisei Mountain)<br></br>Taipei, Taiwan 🇹🇼</p>,
            width: "500px",
            height: "auto",
            location: "",
            path: "/website/images/陽明山.JPG",
        },
        {
            id: uuidv4(),
            title: <p>景福門<br></br>(Taipei East Gate)<br></br>Taipei, Taiwan 🇹🇼</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/景福門.jpeg",
        },
        {
            id: uuidv4(),
            title: <p>猴硐貓村<br></br>(Houtong Cat Village)<br></br>New Taipei, Taiwan 🇹🇼</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/猴硐貓村.JPG",
        },
        {
            id: uuidv4(),
            title: <p>Place de la Basoche<br></br>Lyon, France 🇫🇷</p>,
            height: "auto",
            width: "300px",
            location: "",
            path: "/website/images/place_de_la_basoche.JPG",
        },
        {
            id: uuidv4(),
            title: <p>Le Poids de Soi <br></br>(The Weight of Oneself)<br></br>Lyon, France 🇫🇷</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/le_weight_de_soi.jpg",
        },
        {
            id: uuidv4(),
            title: <p>Vieille Ville d'Annecy<br></br>(Annecy Old City)<br></br>Annecy, France 🇫🇷</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/annecy.jpg",
        }
    ])

    const photoHoverHandler = () => {

    }

    const photoClickHandler = () => {

    }


    return (
        <div className="gallery" id="gallery">
            <h2 className="line-color"> Gallery</h2>
            <div className="gallery-container">
                <ul className="photo-list">
                    {photos.map(photo => (
                        <div className="photo-item"
                            oncontextmenu="return false;"
                            style={{
                                position: "relative",
                                maxWidth: photo.width,
                                maxHeight: photo.height,
                            }}
                            key={photo.id}
                        >
                            <div className="photo-caption-container">
                                <div className={"photo-caption"}
                                >{photo.title}</div>
                            </div>
                            <img
                                src={photo.path}
                                key={photo.id}
                                className="gallery-photo"
                                onHover={() => photoHoverHandler(photo.id)}
                                onClick={() => photoClickHandler(photo.id)}
                            ></img>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Gallery