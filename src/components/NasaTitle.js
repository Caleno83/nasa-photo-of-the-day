import React from "react";

const NasaTitle = (props) => {
    console.log('This is props from Nasa Title', props);

    return (
        <div className="title">
            <h2>{props.title}</h2>
        </div>
    )
};

export default NasaTitle;