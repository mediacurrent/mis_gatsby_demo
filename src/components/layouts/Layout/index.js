import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header";
import Footer from '../Footer';

import "./layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              uri
              title
            }
          }
        }
      }
    `}
    render={data => {
      return(
      <div className="layout">
        <Header {...data.site.siteMetadata} />
        <div className="main">
          {children}
        </div>
        <Footer />
      </div>
    )}}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
