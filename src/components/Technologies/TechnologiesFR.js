import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  Btn3,
} from "../../styles/GlobalComponents";
import { CgChevronDoubleDownO } from "react-icons/cg";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import Link from "next/link";

const Technologies = () => (
  <Section id="tech">
    <Btn3>
      <Link href="#tech">
        <CgChevronDoubleDownO />
      </Link>
    </Btn3>
    <SectionDivider style={{ marginBottom: "3%" }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Ma stack principale est ReactJS. Mais je travail également avec HTML/CSS.
      Pour la partie Back-End j'utilise NodeJS et Express. Je suis également
      compétent avec les API et les bases de données NoSQL (MongoDB).
    </SectionText>
    <List>
      <ListItem>
        <DiReact
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <span
              style={{
                fontWeight: "bolder",
                fontStyle: "italic",
              }}
            >
              Experience avec
            </span>{" "}
            <br />
            <br /> React.js <br /> HTML 5 <br /> CSS <br /> JavaScript <br />{" "}
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience avec
            </span>{" "}
            <br /> <br /> Node.js <br /> Express <br /> API
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>DataBase</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience avec
            </span>{" "}
            <br /> <br /> MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
