import React from "react";
import styled from "styled-components";

function Style4({ src, topic, textContent, link }) {
  return (
    <Container>
      <ImgContainer>
        <Image src={src} alt="image" />
      </ImgContainer>
      <TopicName>{topic}</TopicName>
      <TextContent>
        {textContent}
        <a href={link}> තවත් කියවන්න....</a>
      </TextContent>
    </Container>
  );
}

export default Style4;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 0 0.5rem 0.5rem var(--color-box-shadow);
  padding: 20px 40px;
`;

const ImgContainer = styled.div``;

const Image = styled.img`
  margin-top: 20px;
  width: 100%;
  margin-bottom: 10px;
`;

const TopicName = styled.h3`
  margin-bottom: 20px;
`;

const TextContent = styled.p`
  @media screen and (min-width: 620px) {
    column-count: 2;
    column-rule: 1px solid lightblue;
    column-gap: 40px;
  }
`;
