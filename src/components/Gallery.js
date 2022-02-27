import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

const Gallery = () => {
    const [photos, setPhotos] = useState([
        {
            id: uuidv4(),
            title: "陽明山",
            width: "400px",
            height: "auto",
            path: "/images/陽明山.jpg",
        },
        {
            id: uuidv4(),
            title: "景福門",
            height: "auto",
            width: "400px",
            path: "/images/景福門.jpeg",
        },
        {
            id: uuidv4(),
            title: "猴硐貓村 (Houtong Cat Village)",
            height: "auto",
            width: "400px",
            path: "/images/猴硐貓村.jpg",
        },
        {
            id: uuidv4(),
            title: "Place de la Basoche",
            width: "auto",
            height: "400px",
            path: "/images/place_de_la_basoche.jpg",
        },
        {
            id: uuidv4(),
            title: "Le weight de Soi (The weight of Onewelf)",
            height: "auto",
            width: "400px",
            path: "/images/le_weight_de_soi.jpg",
        },
        {
            id: uuidv4(),
            title: "Annecy",
            height: "auto",
            width: "400px",
            path: "/images/annecy.jpg",
        }
        
    ])

    const photoHandler = () => {

    }


    return(
        <div className="gallery" id="gallery">
            <h2 className="line-color"> Gallery</h2>
            <div className="gallery-container">
                <ul className="photo-list"> 
                        {photos.map(photo => (
                            <div className="photo-item"
                                oncontextmenu="return false;"
                                style={{
                                width: photo.width,
                                height: photo.height
                            }}
                                key={photo.id}>
                                {/* <p>{photo.title}</p> */}
                                <img src={photo.path} key={photo.id} style={{width: photo.width, height: photo.height}}onClick={() => photoHandler(photo.id)}></img>
                            </div>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

export default Gallery