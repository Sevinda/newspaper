import React from "react";
import styled from "styled-components";
import Style5 from "./Style5";
import Style6 from "../Style6/Style6";

function Style5_6Container() {
  return (
    <Container>
      <Style5
        src="/images/champika_ranawaka.jpg"
        topic="Topic 6"
        textContent="Lorem ipsum dolor sit amet consectetur adipisi
        cing elit. Non quos ipsam fuga laudantium mollitia sint, placeat 
        nemo? Eligendi dolorem nemo amet aperiam et consequuntur delectus impedit.
        Accusantium eum unde nesciunt modi esse iusto repellat ex reiciendis mollitia. Velit accusantium
        commodi modi animi voluptate, dolor cum voluptatum reiciendis corrupti ipsum incidunt. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dolorum eligendi dolorem veniam quos ipsum, officia porro
        consequuntur sit molestias earum!"
        link="#"
      />
      <Style6
        topic="Topic 7"
        textContent="Lorem ipsum dolor sit amet consectetur adipisi
        cing elit. Non quos ipsam fuga laudantium mollitia sint, placeat 
        nemo? Eligendi dolorem nemo amet aperiam et consequuntur delectus impedit.
        Accusantium eum unde nesciunt modi esse iusto repellat ex reiciendis mollitia. Velit accusantium
        commodi modi animi voluptate, dolor cum voluptatum reiciendis corrupti ipsum incidunt. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dolorum eligendi dolorem veniam quos ipsum, officia porro
        consequuntur sit molestias earum"
        link="#"
      />
    </Container>
  );
}

export default Style5_6Container;

const Container = styled.div`
  @media screen and (min-width: 620px) {
    display: flex;
  }
`;
