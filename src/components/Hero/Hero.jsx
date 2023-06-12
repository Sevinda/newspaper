import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <>
      <Container>
        <TextContent>
          <ContentHeading>හදමු</ContentHeading>

          <ContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            totam.
          </ContentText>
        </TextContent>

        <VideoContainer
          src="/videos/Hero.mp4"
          autoPlay
          loop
          muted
        ></VideoContainer>
      </Container>
    </>
  );
}

export default Hero;

const Container = styled.article`
  p {
    display: none;
  }

  @media screen and (min-height: 540px) {
    p {
      display: block;
    }
  }
`;

const TextContent = styled.div`
  position: relative;
  z-index: -1;
`;

const ContentHeading = styled.h1`
  position: absolute;
  top: 10vh;
  left: 3rem;
  font-size: 4.5rem;
  color: var(--color-white);
  text-shadow: 4px 4px 4px var(--color-text-shadow-black);

  @media screen and (min-width: 620px) {
    font-size: 8rem;
    left: 5rem;
  }
`;

const ContentText = styled.p`
  position: absolute;
  top: 33vh;
  left: 3rem;
  color: var(--color-white);
  text-shadow: 2px 2px 2px var(--color-text-shadow-black);
  letter-spacing: 1px;

  @media screen and (min-width: 620px) {
    font-size: 2.4rem;
    left: 5rem;
  }
`;

const VideoContainer = styled.video`
  width: 100%;
  height: 50vh;
  margin-top: 1px;
  object-fit: cover;
  position: relative;
  z-index: -2;
`;
