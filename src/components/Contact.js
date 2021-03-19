import React, { Component } from 'react';
import styled from 'styled-components';

import Form from './Form/Form'

import { MdEmail } from 'react-icons/md'
import { ImLocation, ImPhone } from 'react-icons/im'

export default class Contact extends Component {
    
    constructor() {
        super()
    }

    render() {

        return (
            <Container>
                <Text>CONTACT ME</Text>
    
                <ContactContainer>
                    <Form />

                    <ContactMe>
                        <Contacts>
                            <ImLocation size="25px"/>
                            <ContactTitle> Armenia, Yerevan, 15th District </ContactTitle>
                            
                        </Contacts>
                        
                        <Contacts>
                            <ImPhone size="25px"/>
                            <ContactTitle> +374 (33) 04-50-60 </ContactTitle>
                        </Contacts>

                        <Contacts>
                            <MdEmail size="25px"/>
                            <ContactTitle> vaheborisovofficial@gmail.com </ContactTitle>
                        </Contacts>            

                    </ContactMe>
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
    max-width: 1440px;
    width: 100%;
    height: 100%;
`;

const Text = styled.h2`
    font-size: 30px;
    color: #e31b6d;
    border-bottom: 1px solid #e31b6d;
`;

const ContactContainer = styled.div`
    margin-top: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-around
`;

const ContactMe = styled.div`
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
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
`;

const FooterTitle = styled.p`
    text-align: center;
    color: silver;
    margin: auto 0 1rem 0 ;
`;

const Year = styled.span`
    color: #e31b6d;
`;


