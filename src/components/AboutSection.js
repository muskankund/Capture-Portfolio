import React from 'react';
import home1 from '../img/home1.png';
import { StyledAbout, StyledDescription, StyledHide, StyledImage } from '../styles'
//import Framer Motion
import { motion } from 'framer-motion';
//import animation.js
import { titleAnim, fade, photoAnim } from '../animation';
//import wave
import Wave from './Wave';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            We Work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any Photography or videography ideas that you have. We have
                    professionals with amazing skills to help you achieve it.
                </motion.p>
                <Link to="/contacts"><motion.button variants={fade} > Contact Us</motion.button> </Link>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </StyledImage>
            <Wave />
        </StyledAbout>
    )
}

export default AboutSection;