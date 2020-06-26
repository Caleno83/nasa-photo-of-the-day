import React from "react";
import styled from 'styled-components'

const Date = styled.div`
color: #F8F8FF;
text-align: center;
margin: 5px;
`;

const TitleMiddle = styled.h3`
font-size: 20px;
`;

const NasaDate = (props) => {
    console.log("this is the props for Nasa Date :", props);

    return (
        <Date>
            <TitleMiddle>Date: {props.date}</TitleMiddle>
        </Date>
    )
};

export default NasaDate;