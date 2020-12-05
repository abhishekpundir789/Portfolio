import React from 'react'
import { ContentContainer, ContentBg, ContentH1} from './contentElement';

const Content = () => {
    return (
        <ContentContainer>
            <ContentBg>
                <img src = "images/image3.jpg" alt="back"></img>
            </ContentBg> 
            <ContentH1>Hi there, I am Abhishek Pundir. I am learning full Stack Development</ContentH1>           
        </ContentContainer>
    )
}

export default Content
