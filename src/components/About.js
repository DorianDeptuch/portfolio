import React from "react"
import styled from "styled-components"
import WaveSVG from "./WaveSVG"
import SquareSVG from "./SquareSVG"
import { StaticImage } from "gatsby-plugin-image"
import Skills from "./Skills"

const StyledSection = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  font-family: "Poppins", sans-serif;
`

const StyledHeading = styled.h1`
  text-align: "center";
  font-size: "3rem";
  background: "hsl(184, 74%, 44%)";
  margin: 0;
  padding-bottom: "4rem";
`

const StyledDiv = styled.div`
  display: "flex";
  flex-direction: "row";
  width: "100%";
  background: "hsl(184, 74%, 44%)";
  padding: "0 3rem 10rem 3rem";
`

export default function About() {
  const BG_COLOR = "hsl(184, 74%, 44%)"

  return (
    <StyledSection>
      <WaveSVG bg={BG_COLOR} />
      <div style={{ marginTop: "-2rem" }}>
        {/* <StyledHeading>About Me</StyledHeading> */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            background: "hsl(184, 74%, 44%)",
            margin: 0,
            paddingBottom: "4rem",
          }}
        >
          About Me
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            background: "hsl(184, 74%, 44%)",
            padding: "3rem 3rem",
          }}
        >
          <div style={{ width: "50%" }}>
            <p>
              I have been working on this website for a few years and I have
              been working on this website for a few years and I have been
              working on this website for a few years and I have been working on
              this website for a few years and I have been working on this
              website for a few years and I have been working on this website
              for a few years
            </p>
            <Skills />
          </div>
          <div style={{ width: "50%" }}>
            {/* <SquareSVG /> */}
            <StaticImage
              style={{ margin: "2rem", width: "100%" }}
              //   src="https://media-exp1.licdn.com/dms/image/C5603AQGEIGT_T1fCAA/profile-displayphoto-shrink_200_200/0/1634179963810?e=1659571200&v=beta&t=63uXmgT7FaF7K-98WS8SpcuPuoR9mC_xdH4kn2xuG2o"
              src="../../public/static/Dorian-photo.jpeg"
              alt="self"
            />
          </div>
        </div>
      </div>
      {/* <div
        style={{
          background: "linear-gradient(180deg, #1db8c3 0%, #07093f 100%)",
          height: "10rem",
        }}
      ></div> */}
    </StyledSection>
  )
}
