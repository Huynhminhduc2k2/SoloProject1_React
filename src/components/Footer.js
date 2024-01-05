import React from "react";
import twitterIcon from '../images/TwitterIcon.png'
import fbIcon from '../images/FacebookIcon.png'
import insIcon from '../images/InstagramIcon.png'
import githubIcon from '../images/GitHubIcon.png'


export default function Footer(){
    return(
        <footer className="contact">
            <a href="https://twitter.com/?lang=en"><img src={twitterIcon} alt="twitter icon" /></a>
            <a href="https://www.facebook.com/"><img src={fbIcon} alt="fb icon" /></a>
            <a href="https://www.instagram.com/"><img src={insIcon} alt="insta icon" /></a>
            <a href="https://github.com/"><img src={githubIcon} alt="github icon" /></a>
        </footer>
    );
}