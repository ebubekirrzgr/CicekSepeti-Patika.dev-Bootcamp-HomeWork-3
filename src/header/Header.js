/* eslint-disable no-unreachable */
import React from 'react';
import './Header.scss';
import logo from 'assets/logo.png';
import ebu from 'assets/ebu.png';

class Header extends React.Component {
  handleLink() {
    window.open('https://github.com/ebubekirrzgr', '_blank');
  }
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {/* <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <div className="search"></div>
        </div> */}
        <div className="profile">
          <img
            className="ebu-img"
            onClick={this.handleLink}
            src={ebu}
            alt="logo"
          />
        </div>
      </header>
    );
  }
}

export default Header;
