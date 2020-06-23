import React from "react";

const NasaContent = (props) => {
    console.log('This is props from Nasa Content', props);

    return (
        <div className="main-para">
            <p>{props.content}</p>
        </div>
    )
};

export default NasaContent;