
import styled from 'styled-components'

export const ContactContainer = styled.div`
min-height: 692px;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: #fff;
`;

export const FormWrap= styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
    padding: 10px;
}
`;

export const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
widht: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400px){
    padding: 32px 32px;
}
`;

export const ContactH1 = styled.h1`
font-size = 20px;
color: #01bf71;
margin-bottom: 40px;
font-weight: 400;
text-align: center;
`;

export const FormH2 = styled.h2`
font-size = 18px;
color: #01bf71;
margin-bottom: 40px;
font-weight: 400;
text-align: center;
`;

export const FormLabel = styled.label`
font-size: 14px;
margin-bottom: 8px;
color: #fff;
`;

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

export const FormButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`;

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`;

export const Button = styled.button`
border-radius: 50px;
white-space: nowrap;
background: #01BF71;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
`;