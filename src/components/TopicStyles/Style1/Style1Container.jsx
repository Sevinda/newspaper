import React from "react";
import Style1 from "./Style1";
import styled from "styled-components";

function Style1Container() {
  return (
    <Container>
      <Style1
        topic="Topic 1"
        textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic voluptates nulla ea adipisci quisquam magnam repellat aut fugiat, expedita atque voluptatibus delectus rerum earum dolor dolores, eligendi qui ipsam. Placeat perferendis praesentium laboriosam sit! Eligendi harum, perspiciatis ut necessitatibus magni maiores sit, reprehenderit tempore, commodi recusandae fugiat adipisci nulla."
        link="#"
      />
      <Style1
        topic="Topic 2"
        textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic voluptates nulla ea adipisci quisquam magnam repellat aut fugiat, expedita atque voluptatibus delectus rerum earum dolor dolores, eligendi qui ipsam. Placeat perferendis praesentium laboriosam sit! Eligendi harum, perspiciatis ut necessitatibus magni maiores sit, reprehenderit tempore, commodi recusandae fugiat adipisci nulla."
        link="#"
      />
    </Container>
  );
}

export default Style1Container;

const Container = styled.div`
  @media screen and (min-width: 620px) {
    display: flex;
  }
`;
