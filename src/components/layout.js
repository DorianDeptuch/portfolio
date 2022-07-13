import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"

const StyledFooter = styled.footer`
  background-color: hsl(184, 74%, 44%);
  color: #07093f;
  text-align: center;
  padding: 0.5rem;
  margin-top: -0.5rem;
`

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #06083e;
  overflow-x: hidden;
  display: grid;
  ${"" /* max-width: 1200px; */}
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <main>{children}</main>
      <StyledFooter>
        © {new Date().getFullYear()} &middot; Dorian Deptuch
      </StyledFooter>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
