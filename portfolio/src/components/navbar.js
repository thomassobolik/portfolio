import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 20px;
    padding: 20px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  li a {
    display: flex;
    color: black;
    font-size: 16pt;
    padding: 16px 16px;
    justify-content: center;
    text-decoration: none;
  }

  li a:hover {
    font-style: italic;
    color: mediumpurple;
  }

  home {
    grid-column-start: 1;
  }

  code {
    grid-column-start: 2;
  }

  writing {
    grid-column-start: 3;
  }

  music {
    grid-column-start: 4;
  }

  resume {
    grid-column-start: 5;
  }
`

const Navbar = () => (
    <StyledNav>
      <ul>
        <li className="home"><a className="homeText" href="/">home</a></li>
        <li className="code"><a className="codeText" href="https://github.com/thomassobolik" target="_blank" rel="noopener noreferrer">code</a></li>
        <li className="writing"><a className="writingText" href="/writing">writing</a></li>
        <li className="music"><a className="musicText" href="/music">music</a></li>
        <li className="resume"><a className="resumeText" href="/resume_tomsobolik_summer19.pdf">resume</a></li>
      </ul>
    </StyledNav>
);

export default Navbar;
