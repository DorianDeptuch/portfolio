import React from "react"
import styled from "styled-components"
import WaveSVG from "./WaveSVG"
import Skills from "./Skills"
import Portrait from "./Portrait"
import FullSkills from "./FullSkills"
import { device } from "../config/config"

const StyledSection = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  font-family: "Poppins", sans-serif;
  margin-top: 20rem;
  margin-bottom: -20rem;
  color: #07093f;
`

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
  background: hsl(184, 74%, 44%);
  margin: 2rem 0 0 0;
  padding-bottom: 4rem;

  @media only screen and ${device.tablet} {
    padding-top: 4rem;
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: hsl(184, 74%, 44%);
  background-color: "#07093f";
  padding: 0 3rem 10rem 3rem;

  p {
    color: hsl(184, 74%, 44%);
    font-size: 1.25rem;
    font-weight: bold;
    text-align: justify;
  }

  @media only screen and ${device.tablet} {
    p {
      font-size: 0.65rem;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 0 1rem 5rem 1rem;
    .content {
      flex-direction: column-reverse !important;
    }
    .left-side {
      padding-top: 0 !important;
      text-align: center;
    }
  }
`

const StyledContainer = styled.div`
  margin-top: -2rem;
`

export default function About() {
  const BG_COLOR = "hsl(184, 74%, 44%)"

  return (
    <StyledSection>
      <WaveSVG bg={BG_COLOR} />
      <StyledContainer>
        <StyledHeading>About Me</StyledHeading>
        <StyledDiv>
          <div
            style={{
              backgroundColor: "#07093f",

              borderRadius: "5px",
            }}
          >
            <div
              className="content"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div
                className="left-side"
                style={{ width: "100%", padding: "2rem" }}
              >
                <p>
                  I'm a huge believer in challenging myself and always learning
                  something new. A good word to describe me is "synergistic." I
                  amplify the strengths in others when I collaborate in a team
                  setting as we work toward a common goal. I am very adaptable
                  and can collaborate with a team or work independently as well.
                  I write clean, efficient, and maintainable code and have been
                  studying ways to improve my code since I began my programming
                  journey. My love for programming has been ever-growing and I
                  am constantly motivated to learn more about the world of
                  programming and computer science.
                </p>
                <Skills />
              </div>
              <Portrait />
            </div>
            <FullSkills />
          </div>
        </StyledDiv>
      </StyledContainer>
      <div style={{ paddingBottom: "20rem", marginBottom: "-20rem" }}></div>
    </StyledSection>
  )
}
