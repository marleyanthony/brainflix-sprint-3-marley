import React from 'react';
import logo from '../assets/logos/logo.svg';
import user from '../assets/imgs/user.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo-container">
          <img src={logo} alt="logo" className="header__logo" />
        </div>
      </Link>
      <div className="header__search-container">
        <input type="text" placeholder="&#128269; Search" className="header__search-input"></input>
        <Link to="/upload" className="header__search-container-btn-wrapper">
          <button className="header__upload-btn btn-u">
            &#x2B; Upload
          </button>
          <img src={user} alt="user" className="header__user-img user-u" />
        </Link>
      </div>
    </header>
  )
}

export default Header;