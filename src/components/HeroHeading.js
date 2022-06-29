import React from "react"
import styled from "styled-components"

const StyledHeading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: red;
  transform: translate(-50%, -50%);
  background: inherit;
  padding: 3rem 5rem;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: black;
  border-radius: 5px;
  width: 70%;
  font-size: 2rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(10px);
    background: inherit;
  }
`
const name = {
  //   background: "linear-gradient(hsl(184, 74%, 44%), hsl(332, 87%, 70%))",
  background: "linearGradient(red, blue)",
  backgroundClip: "text",
  color: "red",
}

export default function HeroHeading() {
  return (
    <StyledHeading>
      <h1 className="title">
        Hello{" "}
        <span role="img" aria-label="emoji">
          👋
        </span>
        <br />
        <span style={{ color: "red !important" }}>I'm Dorian Deptuch</span>
      </h1>
      <h2 className="subtitle">
        I design and build{" "}
        <span className="highlighted">things for the web</span>.
      </h2>
      <div className="description">
        Full-Stack Web Developer. Based in San Diego, CA.
      </div>
    </StyledHeading>
  )
}
