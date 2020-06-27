import React from "react";
import './index.css';
import './App.css';


function Footer() {
  return (
    <footer className="white-section footer" id="footer">
      <div className="bottom-container">
        <a
          href="https://www.apple.com/ios/app-store/"
          
          className="download-button btn btn-lg btn-dark"
          type="button"
        >
          <i className="icon fab fa-apple"></i>
        </a>
        Download
        <a
          href="https://play.google.com/store/apps"
          
          className="download-button btn btn-lg brn-light"
          style={{}}
          type="button"
        >
          <i className="icon fab fa-google-play"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i className="social-icon fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/explore">
          <i className="social-icon fab fa-twitter"></i>
        </a>
        <a href="/Contact">
          <i className="social-icon fas fa-envelope"></i>
        </a>
        <h6 className="copyright">© Copyright 2020 PlentyOfWoof</h6>
      </div>
    </footer>
  );
}

export default Footer;
