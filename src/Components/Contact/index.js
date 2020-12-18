import React, {useState} from 'react'
import {Button} from '../ButtonElement'
import {ContactContainer, ContactH1, ContactWrapper, ContactH2, ContactForm, ContactInput, ContactLabel, ContactBtnWrapper, ArrowForward, ArrowRight} from './ContactElements'

const Contact = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <ContactContainer id = "contact">
            <ContactH1>Contact Me</ContactH1>
            <ContactWrapper>
                <ContactH2>Have a Question or want to work ogether?</ContactH2>
                <ContactForm>
                    <ContactLabel for="name">Name:</ContactLabel>
                    <ContactInput type="text"></ContactInput>
                    <ContactLabel for="email">Enter Email:</ContactLabel>
                    <ContactInput type="text"></ContactInput>
                    <ContactLabel for="message">Your Message:</ContactLabel>
                    <ContactInput type="text"></ContactInput>
                </ContactForm>
                <ContactBtnWrapper>
                <Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                    Submit {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </ContactBtnWrapper>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
