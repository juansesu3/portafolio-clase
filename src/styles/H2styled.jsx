import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`

font-family: 'Roboto', sans-serif;
font-weight: 300;
letter-spacing: 8px;
margin: 4em 3em 0 3em;
color: #448AFF;
text-align: center;
`;
const Styleh1 = styled.h1`
color: #43bccd;
`;
const Styleh11 = styled.h1`
color: #ea3546;
`;
export const Styledh2 = StyledH2;
export const H1 = Styleh1;
export const H11 = Styleh11; //exportando una constante como etiqueta y envolve el elemnto al que le quiero dar los estilos 

// export const Styledh2 = ({name}) => {
//     return(
//         <StyledH2> {name} </StyledH2>
//     )
// }