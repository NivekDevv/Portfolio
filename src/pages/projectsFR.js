import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../components/Projects/ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionTitle2,
} from "../styles/GlobalComponents";
import { projectsFR } from "../constants/constants";
import HeaderFR2 from "../components/Header/HeaderFR2";
import { Container } from "../layout/LayoutStyles";
import Footer from "../components/Footer/Footer";
const Projects = () => (
  <>
    <Container>
      <HeaderFR2 />
    </Container>
    <Section nopadding id="projects">
      <SectionTitle2 main>Projets</SectionTitle2>
      <GridContainer>
        {projectsFR.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>

    <Footer />
  </>
);

export default Projects;
