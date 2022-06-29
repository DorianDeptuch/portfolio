import React from "react"
import styled from "styled-components"
import HeroSVG from "./HeroSVG"
import HeroHeading from "./HeroHeading"

const StyledSection = styled.section`
  position: relative;
  margin: 0 auto;
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const Hero = () => {
  return (
    <StyledSection id="hero">
      <HeroSVG />
      <HeroHeading />
    </StyledSection>
  )
}

export default Hero
