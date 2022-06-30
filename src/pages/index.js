import Acomplishments from "../components/Acomplishments/Acomplishments";
import AcomplishmentsFR from "../components/Acomplishments/AcomplishmentsFR";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import HeroFR from "../components/Hero/HeroFR";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import TechnologiesFR from "../components/Technologies/TechnologiesFR";
import Timeline from "../components/TimeLine/TimeLine";
import TimelineFR from "../components/TimeLine/TimeLineFR";
import Header from "../components/Header/Header";
import HeaderFR from "../components/Header/HeaderFR";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import React, { Component, useEffect, useRef, useState } from "react";

const Home = () => {
  const [lang, setLang] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("StateLangue");
    if (data !== null) setLang(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("StateLangue", JSON.stringify(lang));
  }, [lang]);

  var styleBorderEn = { width: "40px", margin: "10px", cursor: "pointer" };

  if (lang === false) {
    return (
      <Layout>
        <Header />
        <Section grid>
          <img
            style={styleBorderEn}
            src="/images/fr.png"
            onClick={() => setLang(true)}
          />
          <br />
          <Hero />
          <BgAnimation />
        </Section>
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    );
  } else if (lang === true) {
    return (
      <Layout>
        <HeaderFR />
        <Section grid>
          <img
            style={styleBorderEn}
            src="/images/uk.png"
            onClick={() => setLang(false)}
          />
          <br />
          <HeroFR />
          <BgAnimation />
        </Section>
        <TechnologiesFR />
        <TimelineFR />
        <AcomplishmentsFR />
      </Layout>
    );
  }
};

export default Home;
