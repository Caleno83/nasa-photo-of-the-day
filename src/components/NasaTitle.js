import React from "react";
import styled from 'styled-components'

const TitleArticle = styled.h2`
color: #808080;
text-shadow: 10px 10px 10px blue;
`;
const TitleDiv =styled.div`
margin: 20px 0 20px 0;
`;


const NasaTitle = (props) => {
    console.log('This is props from Nasa Title', props);

    return (
        <TitleDiv>
            <TitleArticle>{props.title}</TitleArticle>
        </TitleDiv>
    )
};

export default NasaTitle;