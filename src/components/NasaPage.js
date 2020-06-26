import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaTitle from "./NasaTitle";
import NasaDate from "./NasaDate";
import NasaImg from "./NasaImg";
import NasaContent from "./NasaContent";

const NasaPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=nEzWjDwQczu7kTai8rZrALpUBpDtqcrPBU0Ba6HK&date=2020-06-12")
        .then( res => {
            console.log("The response for Nasa useEffect is :", res)
            setData(res.data)
        })
        

        .catch( err => {
            console.log("The Error is :", err)
        })
    }, []);

    return (
            <div className="container">
                <NasaDate date={data.date} />
                <NasaImg img={data.url} copyright={data.copyright}/>
                <NasaTitle title={data.title} />
                <NasaContent content={data.explanation} />
                
            </div>
    );
}

export default NasaPage;