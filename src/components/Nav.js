import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from './Logo';

const LogoContainer = styled.li`
  max-width: 0;
  overflow: hidden;
  transition: all 0.8s ease-in;
  font-weight: 600;
  font-size: 16px;
  background: white;
  &.fixed-nav{
    max-width: 500px;
  }
`;

const commonLink = css`
  text-decoration: none;
  padding: 14px;
  display: inline-block;
  transition: all 0.2s;
`;

const LogoLink = styled(Link)`
  color: black;
  ${commonLink}
`;

const LinkStyle = styled(Link)`
  color: white;
  text-transform: uppercase;
  ${commonLink}
`;

const ListItem = styled.li`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const NavStyle = styled.nav`
  background: black;
  top: 0;
  width: 100%;
  transition:all 0.5s;
  position: relative;
  z-index: 1;
  &.fixed-nav {
    position: fixed;
  }
`;

const links = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/about',
    text: 'About',
  },
];

class Nav extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.fixHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  fixHeader = () => {
    if (!this.offsetTop) {
      this.offsetTop = this.nav.offsetTop;
    }

    if (window.scrollY >= this.offsetTop) {
      document.body.style.paddingTop = `${this.nav.offsetHeight}px`;
      this.nav.classList.add('fixed-nav');
      this.logo.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      this.nav.classList.remove('fixed-nav');
      this.logo.classList.remove('fixed-nav');
    }
  }

  render() {
    return (
      <NavStyle ref={(nav) => { this.nav = nav; }}>
        <ListContainer>
          <LogoContainer ref={(logo) => { this.logo = logo; }}>
            <LogoLink to="/">
              <Logo />
            </LogoLink>
          </LogoContainer>
          {links.map(({ to, text }) => (
            <ListItem key={text}>
              <LinkStyle to={to}>{text}</LinkStyle>
            </ListItem>
          ))}
        </ListContainer>
      </NavStyle>
    );
  }
}

export default Nav;
