import React from 'react';
//import styled components
import styled from 'styled-components';
//import from styles
import {StyledAbout} from '../styles'
//import Toggle;
import Toggle from './toggle';
//import AnimateSharedLayout
import {AnimateSharedLayout} from 'framer-motion';
//Import useScroll
import {useScroll} from './useScroll';
//Import scrollReveal
import {fade} from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <StyledFAQ
            variants={fade}
            initial="hidden"
            animate={controls}
            ref={element}
        >
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start.">
                        <div className="answer">
                            <p>
                                Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula
                                elementum sed sit amet dui. Sed porttitor lectus nibh.
                            </p>
                        </div>
                </Toggle>
                <Toggle title="Daily Schedule.">
                        <div className="answer">
                            <p>
                                Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula
                                elementum sed sit amet dui. Sed porttitor lectus nibh.
                            </p>
                        </div>
                </Toggle>
                <Toggle title="Different Payment Methods.">
                        <div className="answer">
                            <p>
                                Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula
                                elementum sed sit amet dui. Sed porttitor lectus nibh.
                            </p>
                        </div>
                </Toggle>
                <Toggle title="What Product Do You Offer.">
                        <div className="answer">
                            <p>
                                Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula
                                elementum sed sit amet dui. Sed porttitor lectus nibh.
                            </p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFAQ>
    );
};

const StyledFAQ = styled(StyledAbout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        .p{
        padding: 1rem 0rem;
    }
    }
`;
export default FaqSection;