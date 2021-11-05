
import React from 'react'
import {Styledh2} from '../styles/H2styled'
import { H1 } from '../styles/H2styled'
import { H11 } from '../styles/H2styled'
 
const Education = () => {
    return (
        <div>
        {/* <Styledh2 name= "Estudios"></Styledh2> */}
        <Styledh2>Educacion </Styledh2>
        <div className="Education-container">
            <Styledh2>
                <H1>Academia</H1> <H11>Geek</H11>
                <h2>2021</h2>
                <h1>Front-end Developer</h1>
                
            </Styledh2>
        </div>  
    </div>
    )
}

export default Education
