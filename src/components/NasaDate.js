import React from "react";

const NasaDate = (props) => {
    console.log("this is the props for Nasa Date :", props);
    
    return (
        <div className="date">
            <h3>{props.date}</h3>
        </div>
    )
};

export default NasaDate;