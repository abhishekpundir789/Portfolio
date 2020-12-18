import React from 'react'
import {FooterContainer, FooterWrap, FooterLinkContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <FooterLink to="/github">About Us</FooterLink>
                            </FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
