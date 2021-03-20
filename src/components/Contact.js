import React, { Component } from 'react';
import styled from 'styled-components';

import Form from './Form/Form';

import { MdEmail } from 'react-icons/md';
import { ImLocation, ImPhone } from 'react-icons/im';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { device } from '../mediaBreakPoints'

export default class Contact extends Component {

    render() {

        return (
            <Container>
                <Text>CONTACT ME</Text>
    
                <ContactContainer>
                    <Form />

                    <ContactMe>
                        <Contacts>
                            <ImLocation size="25px"/>
                            <ContactTitle>Armenia, Yerevan, 15th District</ContactTitle>
                            
                        </Contacts>
                        
                        <Contacts>
                            <ImPhone size="25px"/>
                            <ContactTitle>+374 (33) 04-50-60</ContactTitle>
                        </Contacts>

                        <Contacts>
                            <MdEmail size="25px"/>
                            <ContactTitle>vaheborisovofficial@gmail.com</ContactTitle>
                        </Contacts>            

                    </ContactMe>

                    <NavToSocial>

                        <LinkToSocial href="https://www.facebook.com/Vahe.Borisov.99" target="_blank">
                            <FaFacebookSquare size="30px" color="#0000ff"/>
                        </LinkToSocial>

                        <LinkToSocial href="https://github.com/VaheBorisov" target="_blank">
                            <FaGithub size="30px" color="black"/>
                        </LinkToSocial>

                        <LinkToSocial href="https://www.linkedin.com/in/vaheborisovofficial/" target="_blank">
                            <FaLinkedin size="30px" color="#003399"/>
                        </LinkToSocial>

                        <LinkToSocial href="https://twitter.com/Vahe32512937" target="_blank">
                            <FaTwitter size="30px" color="#0000ff"/>
                        </LinkToSocial>

                    </NavToSocial>
                </ContactContainer>

                <FooterTitle>Vahe Borisov <Year>&#169; 2021</Year></FooterTitle>

            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1050px;
    width: 100%;
    height: 100%;
`;

const Text = styled.h2`
    font-size: 30px;
    color: #e31b6d;
    border-bottom: 1px solid #e31b6d;
`;

const ContactContainer = styled.div`
    margin: 5rem 0;
    width: 100%;
    max-width: 1050px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1023px) {
        flex-direction: column
    }

`;

const ContactMe = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
    @media screen and (max-width: 1023px) {
        margin: 1rem 0 0 3rem
    };
    @media screen and (${device.mobileL}) {
        margin: 1rem auto
    }
`;

const Contacts = styled.div`
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    width: 100%;
    color: silver;
`;

const ContactTitle = styled.p`
    margin-left: 1rem;
    @media screen and (${device.mobileL}) {
        font-size: smaller
    }
`;

const FooterTitle = styled.p`
    text-align: center;
    color: silver;
    margin: auto 0 2rem 0;
`;

const Year = styled.span`
    color: #e31b6d;
`;

const NavToSocial = styled.div`
    margin: 0 auto;
    width: 100%;
    background-color: rgba(250, 250, 250, 0.1);
    padding: 2rem 0;
    justify-content: space-around;
    display: none;
    @media screen and (max-width: 550px) {
        display: flex
    }
`;

const LinkToSocial = styled.a(props => ({
    href: props.href
}));


