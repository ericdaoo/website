import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

const Gallery = () => {
    const [photos, setPhotos] = useState([
        {
            id: uuidv4(),
            title: <p>Center City Skyline<br></br>Philadelphia, USA πΊπΈ</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/philly.jpg",
        },
        {
            id: uuidv4(),
            title: <p>ζ±ζΉζη <br></br>(The Oriental Pearl Tower)<br></br>Shanghai, China πΌ</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/ζ±ζΉζη .png",
        },
        {
            id: uuidv4(),
            title: <p>δΈζε±±<br></br>(Shichisei Mountain)<br></br>Taipei, Taiwan πΉπΌ</p>,
            width: "500px",
            height: "auto",
            location: "",
            path: "/website/images/ι½ζε±±.JPG",
        },
        {
            id: uuidv4(),
            title: <p>ζ―η¦ι<br></br>(Taipei East Gate)<br></br>Taipei, Taiwan πΉπΌ</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/ζ―η¦ι.jpeg",
        },
        {
            id: uuidv4(),
            title: <p>η΄η‘θ²ζ<br></br>(Houtong Cat Village)<br></br>New Taipei, Taiwan πΉπΌ</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/η΄η‘θ²ζ.JPG",
        },
        {
            id: uuidv4(),
            title: <p>Place de la Basoche<br></br>(Basoche Square)<br></br>Lyon, France π«π·</p>,
            height: "auto",
            width: "300px",
            location: "",
            path: "/website/images/place_de_la_basoche.JPG",
        },
        {
            id: uuidv4(),
            title: <p>Le Poids de Soi <br></br>(The Weight of Oneself)<br></br>Lyon, France π«π·</p>,
            height: "auto",
            width: "500px",
            location: "",
            path: "/website/images/le_weight_de_soi.jpg",
        },
        {
            id: uuidv4(),
            title: <p>Vieille Ville d'Annecy<br></br>(Annecy Old City)<br></br>Annecy, France π«π·</p>,
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