import React from "react";

const NasaImg = (props) => {
    console.log("This is props from Nasa Image", props);
    
    return (
        <div className="img-container">
            <img
                className="img"
                src={props.img}
                alt="The X-Ray sky from eROSITA"
            />
            <small>{props.copyright}</small>
        </div>
    )
};

export default NasaImg;