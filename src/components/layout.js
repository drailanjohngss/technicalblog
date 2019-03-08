import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet';
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
        <div>
          <Helmet>
            <meta property="og:title" content="Drailan John Terrible"/>
            <meta property="og:type" content="blog"/>
            <meta property="og:site_name" content="Drailan John D. Terrible Personal Website"/>
            <meta property="og:description" content="Passionate and Committed. Hi! I'm Drailan, I'm a web developer who has experience working on both Front end and server-side development."/>
            <meta property="og:image" content="https://drailanjohngss.github.io/images/metaimg.jpg" />
            <meta property="og:url" content="https://drailanjohngss.github.io/" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <footer className="footer">
            <div className="footer__first">Made with React | Gatsby.js | GraphQL </div>
            <div className="footer__second">Drailan John D. Terrible | Web and Mobile Developer | drailanjohn.gss@gmail.com</div>
            <div className="footer__third"><a href="https://drailanjohngss.github.io/"><u>Go back to main site</u></a></div>
          </footer>
        </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
