import React from 'react';
import styled from 'styled-components'

export default function Projects() {

    return (
        <Container>
            <Text>PROJECTS</Text>
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