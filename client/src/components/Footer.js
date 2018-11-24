import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer blue-grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">SHPE Sponsors</h5>
            <div className="valign-wrapper left social-icons">
              <img className="sponsor-image" src="/boeing.png" alt="Italian Trulli" />
              <img className="sponsor-image" src="/esc.png" alt="Italian Trulli" />
              <img className="sponsor-image" src="/northrop.jpg" alt="Italian Trulli" />
              <img className="sponsor-image" src="/rockwell.jpeg" alt="Italian Trulli" />
            </div>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="http://uci.edu/" target="_blank" rel="noopener noreferrer">
                  UC Irvine
                </a>
              </li>
              <li>
                <a
                  href="http://esc.eng.uci.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Engineering Student Council
                </a>
              </li>
              <li>
                <a
                  href="https://clubs.uci.edu/maes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Latinos in Science and Engineering
                </a>
              </li>
              <li>
                <a
                  href="http://uci-nsbe.weebly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Society of Black Engineers
                </a>
              </li>
              <li>
                <a
                  href="http://swe.eng.uci.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Society of Women Engineers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <ul className="valign-wrapper left"><span className="copy-right">Copyright &copy; 2018 SHPE UCI</span></ul>
          <ul className="valign-wrapper right social-icons">
            <li>
              <a
                href="https://www.facebook.com/groups/SHPEatUCI/"
                className="btn-floating btn-fb mx-1 waves-effect"
              >
                <i className="fa fa-facebook"> </i>
              </a>
            </li>
            <li>
              <a className="btn-floating  btn-tw waves-effect">
                <i className="fa fa-twitter"> </i>
              </a>
            </li>
            <li>
              <a className="btn-floating btn-gplus waves-effect">
                <i className="fa fa-google-plus"> </i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/shpe_uci"
                className="btn-floating  btn-ig waves-effect"
              >
                <i className="fa fa-instagram"> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
