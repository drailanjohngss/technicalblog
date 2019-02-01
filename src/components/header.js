import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import navLogo from '../images/big-logo.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#C00000`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem`,
        display: 'flex',
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0, width: '75px', height: '65px' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={navLogo} />
        </Link>
      </h1>

      <div className="navlinks">
        <div className="navlinks__item">
          <a href='https://drailanjohngss.github.io/#about' target="_blank" rel="noopener noreferrer"> ABOUT </a>
        </div>
        <div className="navlinks__item">
          <a href="https://drailanjohngss.github.io/#projects" target="_blank" rel="noopener noreferrer"> PROJECTS </a>
        </div>
        <div className="navlinks__item">
          <a href="https://drailanjohngss.github.io/#contact" target="_blank" rel="noopener noreferrer"> CONTACT </a>
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
