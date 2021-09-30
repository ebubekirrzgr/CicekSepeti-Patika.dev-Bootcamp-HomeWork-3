/* eslint-disable no-unreachable */
import React from 'react';
import './Footer.scss';
import barney from 'assets/barney.png';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/ebubekir-ruzgar/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/ebubekirrzgr">Github</a>
          </li>
          <li>
            <a href="mailto:ebubekirrzgr@gmail.com">Email</a>
          </li>
          <li>
            <p>
              <img className="barney" src={barney} alt="footer-logo" />
            </p>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
