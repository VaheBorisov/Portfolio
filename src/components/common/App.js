import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route , Switch, Redirect } from 'react-router-dom'

import Header from './Header';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';


function App() {

    return (
        <Router>
            <Container>
                <Header />

                <Switch>

                    <Route path="/" exact >
                        <Redirect to="/Home"/>
                    </Route>

                    <Route path="/Home" component={Home} exact/>
                    <Route path="/About" component={About} exact/>
                    <Route path="/Projects" component={Projects} exact/>
                    <Route path="/Contact" component={Contact} exact/>
                </Switch>
            </Container>

        </Router>
    )
};

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default App


