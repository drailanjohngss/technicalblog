import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
          <footer className="footer">
            <div className="footer__first">Made with React | Gatsby.js | GraphQL </div>
            <div className="footer__second">Drailan John D. Terrible | Web and Mobile Developer | drailanjohn.gss@gmail.com</div>
            <div className="footer__third"><a href="https://drailanjohngss.github.io/"><u>Go back to main site</u></a></div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
