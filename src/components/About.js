import React from 'react';
import styled from 'styled-components';

import Port from '../photos/meIMG.jpg';

import { DiResponsive } from 'react-icons/di';
import { GiBedLamp, GiRocket, GiSpeedometer } from 'react-icons/gi';

import { device } from '../mediaBreakPoints';

export default function About() {

    const Skil = ({name, percent}) => {
        return (
            <SkilItems>
                <SkilName>{name}</SkilName>
                <SkilInPercents>
                    <SkilPercent width={percent}/>
                    <Percent>{percent}</Percent>
                </SkilInPercents>
            </SkilItems>

        )
    }

    return (
        <Container>
            <Text>ABOUT</Text>

            <Goals>
                <Goal>
                    <DiResponsive size='80px' color='#00a1a7'/>
                    <GoalTitle>
                        Responsive
                    </GoalTitle>

                    <GoalDescription>
                        My layouts will work on any device, big or small.
                    </GoalDescription>
                </Goal>

                <Goal>
                    <GiBedLamp size='80px' color='#00a1a7'/>
                    <GoalTitle>
                        Intuitive
                    </GoalTitle>

                    <GoalDescription>
                        Strong preference for easy to use, intuitive UX/UI.
                    </GoalDescription>
                </Goal>

                <Goal>
                    <GiRocket size='80px' color='#00a1a7'/>
                    <GoalTitle>
                        Dinamic
                    </GoalTitle>

                    <GoalDescription>
                        Websites don't have to be static, I love making pages come to life.
                    </GoalDescription>
                </Goal>

                <Goal>
                    <GiSpeedometer size='80px' color='#00a1a7'/>
                    <GoalTitle>
                        Fast
                    </GoalTitle>

                    <GoalDescription>
                        Fast load times and lag free interaction, my highest priority.
                    </GoalDescription>
                </Goal>

            </Goals>

            <AboutContainer>
                <AboutMe>
                    <PortfolioPic />
                    <Description>
                        I'm Front-End Developer in Armenia, Yerevan. I have serious creating intuitive, dynamic user interface.I hope to create online campaigns to inspire the youth.
                    </Description>
                </AboutMe>

                <Skils>

                    <Skil name="HTML" percent="90%"/>

                    <Skil name="CSS/SASS" percent="90%"/>

                    <Skil name="JavaScript" percent="80%"/>

                    <Skil name="ReactJS" percent="60%"/>

                    <Skil name="Git/GitHub" percent="50%"/>

                    <Skil name="OOP" percent="40%"/>


                </Skils>
            </AboutContainer>
        </Container>
    )
};

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
    margin-bottom: 3rem
`;
const Goals = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    margin-bottom: 5rem;
    @media screen and (max-width: 999px) {
        justify-content: space-evenly
    }
`;

const Goal = styled.div`
    min-width:  250px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 999px) {
        width: 35%;
    }
`;

const GoalTitle = styled.h2`
    margin: 0.5rem 0;
    color: #00a1a7;
`;

const GoalDescription = styled.p`
    color: #00a1a7;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 20px
`;



const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    @media screen and (max-width: 900px) {
        width: 60%;
        margin-bottom: 3rem;
    }
`;

const PortfolioPic = styled.div`
    background-image: url(${Port});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;

const Description = styled.p`
    color: white;
    text-align: center;
    font-size: 18px
`;

const Skils = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    margin-right: 2rem;
    @media screen and (max-width: 900px) {
        width: 60%;
    }
`;

const SkilItems = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`;

const SkilName = styled.div`
    width: 30%;
    height: 30px;
    background-color: #04c2c9;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 500px) {
        font-size: small;
    }
    @media screen and (${device.mobileM}) {
        font-size: x-small;
    }
`
const SkilInPercents = styled.div`
    background-color: #eee;
    width: 70%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.5rem
`;

const SkilPercent = styled.div(props => ({
    width: props.width,
    height: '30px',
    backgroundColor: '#00a1a7'
}))


const Percent = styled.span`
    margin-left: 0.5rem;
    color: #666;
    @media screen and (max-width: 500px) {
        font-size: small;
    }
    @media screen and (${device.mobileM}) {
        font-size: x-small;
    }
`

