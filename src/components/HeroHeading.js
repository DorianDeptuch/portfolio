import React, { useRef, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import DorianDeptuch from "./DorianDeptuch"
import { device } from "../config/config"

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
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(20px);
  ${"" /* color: black; */}
  border-radius: 5px;
  width: 70%;
  font-size: 2rem;
  animation: ${fadeInAnimation} 2s forwards ease;

  h1,
  h5 {
    color: black;
  }

  h5 {
    margin: 0;
  }

  ${
    "" /* &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(10px);
    background: inherit;
  } */
  }

  @media only screen and ${device.tablet} {
    padding: 2rem 3.5rem;

    h1 {
      font-size: 0.8em;
    }
    h5 {
      font-size: 0.6em;
    }
  }
  @media only screen and ${device.mobile} {
    padding: 1rem 2rem;

    h1 {
      font-size: 0.5em;
      color: ;
    }
    h5 {
      font-size: 0.3em;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 1rem 2rem;

    h1 {
      font-size: 0.5em;
      color: ;
    }
    h5 {
      font-size: 0.3em;
    }
  }
`

export default function HeroHeading() {
  const headingRef = useRef(null)

  useEffect(() => {
    headingRef.current.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    })
  }, [])
  return (
    <StyledHeading ref={headingRef}>
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
        <h5>
          Fullstack Software Engineer. <wbr /> Based in San Diego, CA.
        </h5>
      </div>
    </StyledHeading>
  )
}
