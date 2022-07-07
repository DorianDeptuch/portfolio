import React from "react"
import styled, { keyframes } from "styled-components"
import DorianDeptuch from "./DorianDeptuch"

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -70%);
    }
    to {
        opacity: 1;
        transform: translateY(-50%, -50%);
    }

`

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
  animation: ${fadeInAnimation} 2s forwards ease;

  h1,
  p {
    color: #07093f;
  }

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

export default function HeroHeading() {
  return (
    <StyledHeading>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1
          className="title"
          style={{ display: "inline-block", position: "relative" }}
        >
          Hello, I'm
        </h1>
        <div style={{ width: "100%" }}>
          <DorianDeptuch />
        </div>
      </div>
      <p>Full-Stack Web Developer. Based in San Diego, CA.</p>
    </StyledHeading>
  )
}
