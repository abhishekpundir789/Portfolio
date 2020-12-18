import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Welcome</SocialLogo>
                        <WebsiteRights>Portfolio © {new Date().getFullYear()}All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//https://www.instagram.com/abhishekpundir789/" target="https://www.instagram.com/abhishekpundir789/" aria-label="Instagram">
                                <FaInstagram></FaInstagram>
                            </SocialIconLink>
                            <SocialIconLink href="//https://www.facebook.com/abhishek.pundir.14268" target="https://www.facebook.com/abhishek.pundir.14268" aria-label="Facebook">
                                <FaFacebook></FaFacebook>
                            </SocialIconLink>
                            <SocialIconLink href="//https://github.com/abhishekpundir789" target="https://github.com/abhishekpundir789" aria-label="GitHub">
                                <FaGithub></FaGithub>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
