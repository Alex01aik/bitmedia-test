import React from 'react'
import './Footer.scss'

const Footer = ({page}) => {

    const footerColor = page === '/'
      ? { background: 'linear-gradient(90.95deg, #255D8B 2.29%, #3A80BA 96.79%)'}
      : { background: '#1C3B55' }

    return (
        <div
          className="footer"
          style={footerColor}>
          <p
            className="footerLogo">
            AppCo
          </p>
          <p
            className="rightsReserved">
            All rights reserved by ThemeTags
          </p>
          <p
            className="copyrigths">
            Copyrights © 2019.
          </p>
        </div>
    )
}
  
export default Footer