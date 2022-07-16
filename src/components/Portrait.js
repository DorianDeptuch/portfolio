import React from "react"
import styled from "styled-components"
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
        src="https://res.cloudinary.com/dsykkv6uh/image/upload/v1657952686/Dorian-photo_gflotg.jpg"
        alt="self"
      />
    </StyledDiv>
  )
}
