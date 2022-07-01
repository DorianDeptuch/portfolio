import React from "react"
import styled, { keyframes } from "styled-components"
import SquareSVG from "./SquareSVG"
import { StaticImage } from "gatsby-plugin-image"

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    aspect-ratio: 1 / 1;
  }
`

export default function Portrait() {
  return (
    <StyledDiv>
      {/* <SquareSVG /> */}
      <StaticImage
        style={{ margin: "2rem", width: "100%" }}
        src="../../public/static/Dorian-photo.jpeg"
        alt="self"
      />
    </StyledDiv>
  )
}
