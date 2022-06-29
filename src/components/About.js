import React from "react"
import Styled from "styled-components"
import WaveSVG from "./WaveSVG"
import SquareSVG from "./SquareSVG"
import { StaticImage } from "gatsby-plugin-image"

const StyledSection = Styled.section`
    // background: #729dba;
    // background: linear-gradient(180deg, rgba(6,8,62,1) 0%, rgba(6,8,62,1) 70%, hsl(184, 74%, 44%) 70%, hsl(184, 74%, 44%) 100%);
`

export default function About() {
  return (
    <StyledSection>
      <WaveSVG />
      <div style={{ marginTop: "-2rem" }}>
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
            padding: "0 3rem 10rem 3rem",
          }}
        >
          <div style={{ width: "50%" }}>
            I have been working on this website for a few years and I have been
            working on this website for a few years and I have been working on
            this website for a few years and I have been working on this website
            for a few years and I have been working on this website for a few
            years and I have been working on this website for a few years
          </div>
          <div style={{ width: "50%" }}>
            {/* <SquareSVG /> */}
            <StaticImage
              style={{ margin: "2rem", width: "100%" }}
              src="https://media-exp1.licdn.com/dms/image/C5603AQGEIGT_T1fCAA/profile-displayphoto-shrink_200_200/0/1634179963810?e=1659571200&v=beta&t=63uXmgT7FaF7K-98WS8SpcuPuoR9mC_xdH4kn2xuG2o"
              alt="self"
            />
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
