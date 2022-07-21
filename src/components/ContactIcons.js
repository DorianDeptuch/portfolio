import React from "react"
import styled from "styled-components"
import { device } from "../config/config"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  width: 40%;

  div {
    width: 100%;
    max-width: ;
  }
  svg,
  path {
    fill: hsl(184, 74%, 44%);
  }

  a {
    color: hsl(184, 74%, 44%);
    text-decoration: none;
    height: 5rem;
    display: inline-block;
    width: 100%;
  }

  @media only screen and (max-width: 1600px) {
    width: 50%;
  }
  @media only screen and (max-width: 1330px) {
    width: 60%;
  }
  @media only screen and (max-width: 1130px) {
    width: 70%;
  }
  @media only screen and (max-width: 980px) {
    width: 80%;
  }
  @media only screen and (max-width: 870px) {
    width: 90%;
  }
  @media only screen and ${device.tablet} {
    width: 70%;
  }
  @media only screen and (max-width: 650px) {
    width: 80%;
  }
  @media only screen and (max-width: 560px) {
    width: 95%;
  }
  @media only screen and ${device.mobile} {
    padding: 2rem 0;
    width: 80%;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
    padding: 1rem;
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 5rem;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin: 1rem 0;
  width: 100%;

  .key,
  .value {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    p {
      margin: 0;
    }
  }

  .value {
    justify-content: flex-end;
  }

  svg {
    margin-right: 2rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 70%;
    transform: scale(1.05);
  }

  & > * {
    margin: 1rem;
  }
  p {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
  }

  svg,
  path {
    fill: hsl(184, 74%, 44%);
    height: 100%;
  }

  @media only screen and ${device.tablet} {
    & > * {
      margin: 0.5rem;
    }

    p {
      font-size: 1rem;
    }

    svg,
    path {
      height: 70%;
    }
  }
  @media only screen and ${device.mobile} {
    & > * {
      margin: 0.25rem;
    }

    p {
      font-size: 0.75rem;
    }

    svg,
    path {
      height: 50%;
    }
    svg {
      margin-right: 1rem;
    }
  }

  @media only screen and (max-width: 380px) {
    p {
      font-size: 0.6rem;
    }
    svg {
      transform: scale(0.8);
      margin-right: 0.75rem;
    }
    ${"" /* width: 90%; */}
  }
`

export default function ContactIcons() {
  return (
    <StyledContainer>
      <div>
        <a
          href="emailto:dorian.deptuch@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <StyledDiv>
            <div className="key">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
              </svg>
              <p>E-Mail:</p>
            </div>
            <div className="value">
              <p>dorian.deptuch@gmail.com</p>
            </div>
          </StyledDiv>
        </a>
        <a
          href="https://www.linkedin.com/in/doriandeptuch/"
          target="_blank"
          rel="noreferrer"
        >
          <StyledDiv>
            <div className="key">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
              <p>LinkedIn:</p>
            </div>
            <div className="value">
              <p>linkedin.com/in/doriandeptuch/</p>
            </div>
          </StyledDiv>
        </a>
        <a
          href="https://github.com/DorianDeptuch"
          target="_blank"
          rel="noreferrer"
        >
          <StyledDiv>
            <div className="key">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <p>GitHub:</p>
            </div>
            <div className="value">
              <p>github.com/DorianDeptuch</p>
            </div>
          </StyledDiv>
        </a>
      </div>
    </StyledContainer>
  )
}
