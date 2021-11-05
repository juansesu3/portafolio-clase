import React from "react";
import styled from "styled-components";



const Containerprin = styled.div`

    box-sizing: border-box;
        -webkit-box-sizing: border-box;

    float: right;
    width: 33.33%;
    padding: 1rem;
    
`;

const Container1 = styled.div`
    border: 1px solid orange;
    padding: 1rem;
    margin: 10px;
    

`;

const Container2 = styled.div`
    border: 1px solid pink;
    padding: 1rem;
    margin: 10px;

`;

const Container3 = styled.div`
    border: 1px solid green;
    padding: 1rem;
    margin: 10px;

`;
const Container4 = styled.div`
    border: 1px solid red;
    padding: 1rem;
    margin: 10px;
`;


const Styleh2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #448AFF;

`;

const Styleh4 = styled.h4`

    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #615a5a;
`;

const Stylep = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

const Div =styled.div`
display: flex;

`;

export const Divp = Div;
export const Contprin = Containerprin;
export const Cont1 = Container1;
export const Cont2 = Container2;
export const Cont3 = Container3;
export const Cont4 = Container4;
export const H2 = Styleh2;
export const H4 = Styleh4;
export const P  = Stylep