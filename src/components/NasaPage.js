import React, { useState, useEffect } from "react";
import axios from "axios";

const NasaPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=nEzWjDwQczu7kTai8rZrALpUBpDtqcrPBU0Ba6HK")
        .then( res => {
            console.log("The response for Nasa useEffect is :", res)
        })

        .catch( err => {
            console.log("The Error is :", err)
        })
    }, []);

    return (
            <div className="container">
                
            </div>
    );
}

export default NasaPage;