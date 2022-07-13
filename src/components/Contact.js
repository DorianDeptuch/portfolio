import React from "react"
import styled from "styled-components"
import WaveSVG from "./WaveSVG"
import { PRIMARY } from "../config/config"
import ContactIcons from "./ContactIcons"
import { device } from "../config/config"

const StyledSection = styled.section`
  color: #07093f;
`

const StyledContainer = styled.div`
  margin-top: -2.1rem;
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

  @media only screen and ${device.tablet} {
    padding: 0 1rem 10rem 1rem;
  }
`

export default function Contact() {
  const BG_COLOR = PRIMARY
  return (
    <StyledSection>
      <WaveSVG bg={BG_COLOR} />
      <StyledContainer>
        <StyledHeading>Contact Me</StyledHeading>
        <StyledDiv>
          <div
            style={{
              backgroundColor: "#07093f",
              width: "100%",
              borderRadius: "5px",
            }}
          >
            <ContactIcons />
          </div>
        </StyledDiv>
      </StyledContainer>
    </StyledSection>
  )
}
