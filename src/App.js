import React from "react";
import NasaPage from "./components/NasaPage";
import styled from 'styled-components'

const Background = styled.div`
background-color: black;
padding: 20px;
`;

const Title = styled.h1`
color: #F8F8FF;
text-align: center;
padding: 20px;
text-shadow: 10px 10px 10px blue;
`;


function App() {
  return (
    <Background>
      <Title>NASA PHOTO OF THE DAY</Title>
        <NasaPage />
    </Background>
    
  );
};

export default App;
