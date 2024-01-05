import React from 'react';
import image from '../images/image.jpg';
import emailIcon from '../images/mail.png';
import linkedIcon from '../images/linkedin.png';

export default function NavBar() {
  return (
    <nav className="nav">
      <img className="nav-image" src={image} alt="image" />
      <h1 className="nav-title">Huỳnh Minh Đức</h1>
      <p className="nav-job">Full-stack Developer</p>
      <p className="nav-web">huynhminhducDEV.website</p>
      <div className="nav-btn">
        <button className="nav-email">
          <img src={emailIcon} alt="email icon" />
          Email
        </button>
        <button className="nav-linked">
          <img src={linkedIcon} alt="linked icon" />
          LinkedIn
        </button>
      </div>
    </nav>
  );
}
