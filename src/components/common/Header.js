import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


function Header(props) {
    const { location } = props;

    const NavLinks = ({to, label, location}) => {
        let linksClassName = 'page-links'

        if (location === to) {
            linksClassName += ' active'
        }
        
        return <Link to={to} className={linksClassName}>{label}</Link>
    }

    return (
        <Nav>
            <Container>
                <NavPages>
                    <NavLinks to='/Home' label="HOME" location={location.pathname}/>
                    <NavLinks to='/About' label="ABOUT" location={location.pathname}/>
                    <NavLinks to='/Projects' label="PROJECTS" location={location.pathname}/>
                    <NavLinks to='/Contact' label="CONTACT" location={location.pathname}/>
                </NavPages>

                <NavToSocial>

                    <LinkToSocial href="https://www.facebook.com/Vahe.Borisov.99" target="_blank">
                        <FaFacebookSquare size="25px" color="#0000ff"/>
                    </LinkToSocial>

                    <LinkToSocial href="https://github.com/VaheBorisov" target="_blank">
                        <FaGithub size="25px" color="black"/>
                    </LinkToSocial>

                    <LinkToSocial href="https://www.linkedin.com/in/vaheborisovofficial/" target="_blank">
                        <FaLinkedin size="25px" color="#003399"/>
                    </LinkToSocial>

                    <LinkToSocial href="https://twitter.com/Vahe32512937" target="_blank">
                        <FaTwitter size="25px" color="#0000ff"/>
                    </LinkToSocial>

                </NavToSocial>

            </Container>
        </Nav>
    )
}

const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Nav = styled.div`
    width: 100%;
    height: 85px;

`;

const NavPages = styled.div`
    width: 30%
`;

const NavToSocial = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-evenly;

`;

const LinkToSocial = styled.a(props => ({
    href: props.href
}));

export default withRouter(Header)

