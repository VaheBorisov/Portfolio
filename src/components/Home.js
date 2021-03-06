import React from 'react';
import styled from 'styled-components';
import { device } from '../mediaBreakPoints';

export default function Home() {

    return (
        <Welcome>
            <Text>
                Hello, I'm <FullName>Vahe Borisov</FullName>.
            </Text>
            <Text>I'm a Front-End Developer</Text>
        </Welcome>
    )
}

const Welcome = styled.div`
    margin: 30vh auto 38.45vh auto;

`;

const Text = styled.h1`
    color: white;
    font-weight: 400;
    font-size: 50px;
  @media screen and (${device.tablet}) {
    font-size: 30px;
  }
`;

const FullName = styled.span`
    color: #e31b6d;
`