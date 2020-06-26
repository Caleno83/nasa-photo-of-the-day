import React from "react";
import styled from 'styled-components'

const ImgContainer = styled.div`
padding: 10px;
`;

const Img = styled.img`
border-radius: 8px;
border: 2px solid #778899;
height: 800px;
width: 900px;
display: block;
margin-left: auto;
margin-right: auto;
&:hover {
    opacity: 70%;
}
`;

const CopyRight = styled.p`
color: white;
text-align: right;
`;


const NasaImg = (props) => {
    console.log("This is props from Nasa Image", props);
    
    return (
        <ImgContainer>
            <Img
                className="img"
                src={props.img}
                alt="NGC 2359: Thor's Helmet Image"
            />
            <CopyRight>{props.copyright}</CopyRight>
        </ImgContainer>
    )
};

export default NasaImg;