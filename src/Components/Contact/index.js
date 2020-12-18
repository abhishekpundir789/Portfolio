import React from 'react'
import {ContactContainer, ContactH1, FormWrap, FormContent, Form, FormH2, FormLabel, FormInput, Button} from './ContactElements'

const Contact = () => {
    
    return (
        <ContactContainer id = "contact">
            <ContactH1>Contact Me</ContactH1>
            <FormWrap>
                <FormContent>
                    <Form action ="#">
                        <FormH2>Submit your Questions Here</FormH2>
                        <FormLabel htmlFor ='for'>Name</FormLabel>
                        <FormInput type='name'></FormInput>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required></FormInput>
                        <FormLabel htmlFor='for'>Your Message</FormLabel>
                        <FormInput type ='message'></FormInput>
                        <Button primary="true" dark="true">
                    Submit
                </Button>
                    </Form>
                </FormContent>
            </FormWrap>
        </ContactContainer>
    )
}

export default Contact
