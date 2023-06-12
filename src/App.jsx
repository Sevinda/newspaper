import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MainSlide from "./components/MainSlide/MainSlide";
import Style1Container from "./components/TopicStyles/Style1/Style1Container";
import Style2 from "./components/TopicStyles/Style2/Style2";
import Style3 from "./components/TopicStyles/Style3/Style3";
import Style4 from "./components/TopicStyles/Style4/Style4";
import Style5_6Container from "./components/TopicStyles/Style5/Style5_6Container";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <MainSlide
        imgSrc="/images/train_accident.webp"
        maintitle="Train Accident"
        subtitle="14 people died and 40 injured in a train accident in India."
      />
      <Style1Container />
      <Style2
        topic="Topic 3"
        textContent="Lorem ipsum dolor sit amet consectetur adipisi
        cing elit. Non quos ipsam fuga laudantium mollitia sint, placeat 
        nemo? Eligendi dolorem nemo amet aperiam et consequuntur delectus impedit.
        Accusantium eum unde nesciunt modi esse iusto repellat ex reiciendis mollitia. Velit accusantium
        commodi modi animi voluptate, dolor cum voluptatum reiciendis corrupti ipsum incidunt. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dolorum eligendi dolorem veniam quos ipsum, officia porro
        consequuntur sit molestias earum!"
        link="#"
      />
      <Style3
        topic="Topic 4"
        textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        fuga, eligendi beatae, eius repudiandae, dicta officia ex delectus
        maxime corrupti pariatur provident libero earum voluptatibus
        reprehenderit iste cupiditate inventore. Ipsam mollitia magni
        quidem, repellat magnam aperiam maxime, pariatur dignissimos quod,
        recusandae perferendis facilis ea quibusdam! Quisquam debitis totam,
        quos nostrum unde voluptate reprehenderit alias dolores voluptatem
        obcaecati eaque voluptates id cum eius accusantium, officiis omnis
        consequuntur ratione rerum blanditiis nesciunt. At perspiciatis esse
        sit? Corrupti distinctio itaque a delectus repudiandae consequuntur?
        Deserunt, officiis eos necessitatibus voluptatibus deleniti non est,
        aliquid dolor quia iure provident pariatur mollitia et consequatur
        maxime libero eveniet? Veritatis impedit quae sapiente illum soluta
        odio libero porro, asperiores atque ratione est iure dignissimos
        officia ad ducimus eos optio repellendus blanditiis. Rerum ad
        placeat odit quod mollitia animi vel, iusto accusantium hic nobis
        commodi unde optio cumque dignissimos atque voluptatem, illum modi
        quas provident adipisci, sapiente pariatur! Maxime porro corporis
        esse nulla facilis saepe aperiam excepturi voluptatum alias
        consequuntur ipsa cupiditate voluptatibus provident quam eius, neque
        inventore, iusto blanditiis dignissimos quibusdam. Non, officiis est
        perferendis rerum optio error tempore accusantium, repellendus
        expedita explicabo eligendi ab quas corporis cupiditate placeat
        neque quos repudiandae tempora dolorem fugit vel. Consequatur,
        ducimus."
        link="#"
      />
      <Style4
        src="/images/parliament_image.jpg"
        topic="Topic 5"
        textContent="Lorem ipsum dolor sit amet consectetur adipisi
        cing elit. Non quos ipsam fuga laudantium mollitia sint, placeat 
        nemo? Eligendi dolorem nemo amet aperiam et consequuntur delectus impedit.
        Accusantium eum unde nesciunt modi esse iusto repellat ex reiciendis mollitia. Velit accusantium
        commodi modi animi voluptate, dolor cum voluptatum reiciendis corrupti ipsum incidunt. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dolorum eligendi dolorem veniam quos ipsum, officia porro
        consequuntur sit molestias earum!"
        link="#"
      />
      <Style5_6Container />
    </div>
  );
}

export default App;
