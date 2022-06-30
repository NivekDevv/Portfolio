import React, { Component, useEffect, useRef, useState } from "react";
import { init } from "ityped";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionText2,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span, Span2 } from "./HeroStyles";

function Hero() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 120,
      backSpeed: 30,
      loop: true,
      strings: ["Front-End", "Back-End", "FullStack"],
    });
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bonjour, je suis
          <br />
          <Span>Kevin Toussaint</Span> <br />
          Développeur Web
          <Span2 style={{ marginLeft: "2rem" }} ref={textRef}></Span2>
        </SectionTitle>
        <SectionText2>
          Êtes-vous à la recherche d'un développeur web junior? Très motivé et
          qui apprend rapidement? Je suis là pour vous! Vous pouvez télecharger
          mon CV en cliquant sur le bouton ci-dessous.
          <br />
        </SectionText2>
        <Button
          onClick={
            () =>
              (window.location =
                "https://drive.google.com/uc?export=download&id=1BT0-D38wST4M7ewtjsWPl1QxalvNHnpA")
            //https://drive.google.com/uc?export=download&id=17tKOhx1MYfXvIFGFKZvj5f8Gnuw1IuCi CV CHEF DE PROJET
          }
        >
          <td>Mon CV</td>
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
