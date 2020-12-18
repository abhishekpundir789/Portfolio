import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components'

export const ContactContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: '#fff';

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 768px){
    height: 1300px;
}
`;

export const ContactWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
`;

export const ContactH1 = styled.h1`
font-size = 2.5rem;
color: #01bf71;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`;

export const ContactH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

export const ContactForm = styled.div`
align-items: center;
background: #0106060; 
`;

export const ContactLabel = styled.label`
font-size: 1rem;
`;

export const ContactInput = styled.input`
max-width: 500px;
`;

export const ContactBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;