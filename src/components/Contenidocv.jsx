import React from "react";
import { Contprin } from "../styles/Contenidocv";
import { Cont1 } from "../styles/Contenidocv";
import { Cont2 } from "../styles/Contenidocv";
import { Cont3 } from "../styles/Contenidocv";
import { Cont4 } from "../styles/Contenidocv";
import { H2 } from "../styles/Contenidocv";
import { H4 } from "../styles/Contenidocv";
import { P } from "../styles/Contenidocv";

const Contenidocv = () => {
 return (
     <Contprin>
         <Cont1>
            <H2>Mis estudios</H2>
            <H4>Some text</H4>
            <P>Some text</P>
            <H4>Some text</H4>
            <P>Some text</P>
         </Cont1>
         <Cont2>
             <H2>Experincia</H2>
             <H4>Some text</H4>
             <P>Some text</P>
         </Cont2>
         <Cont3>
             <H2>CertificaioneS</H2>
             <H4>Some text</H4>
         </Cont3>
         <Cont4>
             <H2>Habilidades</H2>
         </Cont4>
         
     </Contprin>
     
 )   
}
export default Contenidocv