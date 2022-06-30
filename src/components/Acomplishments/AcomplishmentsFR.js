import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: 2014,
    text: "Baccalauréat Maintenance des Equipements Industriels",
  },
  { number: 2021, text: "Développement de 10 applications en 10 semaines" },
  {
    number: 2022,
    text: "Titre professionnel Développement d'applications web et mobile (RNCP 6 - Niveau Bac +3)",
  },
  { number: 2022, text: "Réalisation de mon premier site web (celui-ci)" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplissement Personnel</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
