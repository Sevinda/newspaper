import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const links = [
    { label: "මුල් පිටුව", url: "/" },
    { label: "පුවත් විමසුම", url: "/news" },
    { label: "ලොවින් පුවත්", url: "/world-news" },
    { label: "නිමැවුම්", url: "/production" },
    { label: "වීඩියෝ", url: "/video" },
    { label: "මත", url: "/opinion" },
  ];

  const [hamburgerStatus, setHamburgerStatus] = useState(false);

  const collapse = () => {
    setHamburgerStatus(!hamburgerStatus);
  };

  return (
    <Container>
      <HeaderContainer>
        <LogoContainer>
          <a href="#">
            <LogoImage src="/images/logo.png" alt="logo" />
          </a>

          <HamBurgerIcon
            src="/images/menu.svg"
            alt="hamburger menu"
            onClick={collapse}
          />

          <LinksContainer>
            {links.map((link, index) => (
              <a key={index} href={link.url}>
                {link.label}
              </a>
            ))}
          </LinksContainer>
        </LogoContainer>
      </HeaderContainer>

      <HamberBurgerClickLinksContainer show={hamburgerStatus}>
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.label}
          </a>
        ))}
      </HamberBurgerClickLinksContainer>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  opacity: 0.98;
  position: sticky;
  top: 0;
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: ${(props) => (props.show ? "2" : "1")};
`;

const LogoContainer = styled.nav`
  background-color: var(--color-background-navbar);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 54px;
  margin-left: 10px;
`;

const HamBurgerIcon = styled.img`
  width: 50px;
  cursor: pointer;
  padding: 10px;

  @media screen and (min-width: 880px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  display: none;

  a {
    color: var(--color-anchor-navbar);
    text-decoration: none;
    margin: 10px;
    transition: all 0.3s;
  }

  a:hover {
    color: var(--color-anchor-navbar-hover);
  }

  @media screen and (min-width: 880px) {
    display: block;
  }
`;

const HamberBurgerClickLinksContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: var(--color-background-navbar);
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-150%)")};
  transition: transform 0.2s;

  a {
    margin-inline: 10px;
    padding-block: 10px;
    text-decoration: none;
    color: var(--color-anchor-navbar);
    transition: all 0.3s;
    border-bottom: 1px solid var(--color-hamburger-border);
  }

  a:hover {
    color: var(--color-anchor-navbar-hover);
  }

  @media screen and (min-width: 880px) {
    display: none;
  }
`;
