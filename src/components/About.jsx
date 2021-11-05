import React from 'react'

// import { Image } from '../styles/aboutStyles'
import AboutStyle from '../styles/aboutStyles'
import {Avatar} from '../styles/aboutStyles'
import {Abouth2} from '../styles/aboutStyles'
import { Paragraph } from '../styles/aboutStyles'
import { Paragraph2 } from '../styles/aboutStyles'
import  { Rss} from '../styles/aboutStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'



const About = () => {
    return(
        <AboutStyle>
        <div className="About-container">
            <Avatar>
                <figure>
                    <img src="https://res.cloudinary.com/dv08oqgvx/image/upload/w_200,c_fill,ar_1:1,g_auto,r_max,bo_2px_solid_aqua,/v1636073899/jxaithulxttayzi2pk8j.jpg" alt="Mi Avatar"/>
                </figure>
            </Avatar>
            <Abouth2>
                <h2>Juan Sebastian Suarez Ramirez</h2>
            </Abouth2>
            <Paragraph>
                <p>Aprendiz Academia Geek</p>
            </Paragraph>
            <Paragraph2>
               <p>Cali, Colombia</p>
            </Paragraph2>
            <Rss>
                 <h4>Inbox</h4>
                 
            </Rss>
            <FontAwesomeIcon icon={faInbox}/>
            {/* <FontAwesomeIcon icon={faInbox}/> */}
            
        </div>
    </AboutStyle>
        
        )
}

export default About;
