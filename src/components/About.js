import React from "react"
import styled from "styled-components"
import WaveSVG from "./WaveSVG"
import Skills from "./Skills"
import Portrait from "./Portrait"
import { BACKGROUND } from "../config/config"

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
    font-size: 1.5rem;
    font-weight: bold;
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
              display: "flex",
              flexDirection: "row",
              borderRadius: "5px",
            }}
          >
            <div style={{ width: "100%", padding: "2rem" }}>
              <p>
                I have been working on this website for a few years and I have
                been working on this website for a few years and I have been
                working on this website for a few years and I have been working
                on this website for a few years and I have been working on this
                website for a few years and I have been working on this website
                for a few years
              </p>
              <Skills />
            </div>
            <Portrait />
          </div>
        </StyledDiv>
      </StyledContainer>
      <div style={{ paddingBottom: "20rem", marginBottom: "-20rem" }}></div>
    </StyledSection>
  )
}
