import React from "react";
import styled from 'styled-components'

const Article = styled.p`
color: #F8F8FF;
font-size: 18px;
line-height: 30px;
`;

const ArticleDiv = styled.div`
margin-bottom: 50px;
`;

const NasaContent = (props) => {
    console.log('This is props from Nasa Content', props);

    return (
        <ArticleDiv>
            <Article>{props.content}</Article>
        </ArticleDiv>
    )
};

export default NasaContent;