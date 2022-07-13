import React from "react"
import styled from "styled-components"
import WaveSVG from "./WaveSVG"
import Carousel from "./Carousel"
import { BACKGROUND } from "../config/config"

const StyledSection = styled.section``

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
  background-color: hsl(238, 80%, 14%);
  margin: 2rem 0 0 0;
  padding-bottom: 4rem;
  color: hsl(184, 74%, 44%);
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: hsl(238, 80%, 14%);
  padding-bottom: 10rem;
  justify-content: center;
`

export default function Projects() {
  //   const BG_COLOR = "hsl(332, 87%, 70%)"

  return (
    <StyledSection>
      <WaveSVG bg={BACKGROUND} />

      <div style={{ marginTop: "-2rem" }}>
        <StyledHeading>Featured Projects</StyledHeading>
        <StyledDiv>
          <Carousel />
        </StyledDiv>
      </div>
    </StyledSection>
  )
}
