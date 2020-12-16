import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, HeroH1, VideoBg, HeroP, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
            <HeroH1>Hi there, I am Abhishek Pundir.</HeroH1>
            <HeroP>
                I am learning full Stack Web Development
            </HeroP>
            <HeroBtnWrapper>
                <Button to="portfolio" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                    Portfolio {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>           
        </HeroContainer>
    )
}

export default HeroSection
