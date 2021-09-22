import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">social links</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/kennie-larkson/autocomplete"
                >
                  Github Repo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2021 Copyright Lawal Abdulrafiu Kehinde
        </div>
      </div>
    </footer>
  );
};

export default Footer;
