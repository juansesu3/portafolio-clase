import React from 'react'
import About from '../components/About'
import Contenidocv from '../components/Contenidocv'
import Education from '../components/Education'
import { Divp } from '../styles/Contenidocv'
const Container = () => {
    return (
        <Divp>
            <About/>
            <Education/>
            <Contenidocv/>
        </Divp>
    )
}

export default Container
