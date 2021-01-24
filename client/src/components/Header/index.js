import React from 'react'
import './Header.scss'

const Header = ({page}) => {
    const footerColor = page === '/'
      ? { background: 'linear-gradient(90.95deg, #255D8B 2.29%, #3A80BA 96.79%)'}
      : { background: '#3A80BA' }
    return (
        <div
            className="header"
            style={footerColor}>
          <h1
            className="logo">
            AppCo
          </h1>
        </div>
    )
}
  
export default Header