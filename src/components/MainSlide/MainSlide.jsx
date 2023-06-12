import React from "react";
import styled from "styled-components";

function MainSlide({ imgSrc, maintitle, subtitle }) {
  return (
    <>
      <MainContainer>
        <TextContent>
          <h3>{maintitle}</h3>
          <p>{subtitle}</p>
        </TextContent>

        <PictureContainer src={imgSrc} alt="sample_image" />
      </MainContainer>
    </>
  );
}

export default MainSlide;

const MainContainer = styled.div`
  margin-bottom: 40px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;

  h3 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 620px) {
    text-align: left;
    margin-left: 20px;

    h3 {
      font-size: 2.4rem;
    }
  }
`;

const PictureContainer = styled.img`
  width: 100%;
  height: 45vh;
  object-fit: cover;
  box-shadow: 0 0 0.5rem 0.5rem var(--color-box-shadow);
`;
