import React from "react";
import styled from "styled-components";

function Style5({ topic, textContent, link }) {
  return (
    <Container>
      <TopicName>{topic}</TopicName>
      <ImgContainer>
        <Image src="/images/laptop.jpg" alt="image" />
      </ImgContainer>
      <TextContent>
        {textContent}
        <a href={link}> තවත් කියවන්න....</a>
      </TextContent>
    </Container>
  );
}

export default Style5;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 0 0.5rem 0.5rem var(--color-box-shadow);
  padding: 20px 40px;

  @media screen and (min-width: 620px) {
    width: 50vw;
  }
`;

const ImgContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const TopicName = styled.h3`
  margin-bottom: 20px;
`;

const TextContent = styled.p``;
