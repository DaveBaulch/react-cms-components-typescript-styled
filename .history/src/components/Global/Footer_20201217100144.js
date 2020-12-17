export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-primary" id="footer-primary" role="contentinfo">
        <div className="container-fluid container-fluid--contained">
          <div className="row">
            <div className="footer-primary__col footer-primary__col--1">
              <div className="footer-primary__sub1">
                <h2>Contact Us</h2>

                <nav aria-label="Contact items">
                  <ul className="footer-nav">
                    <li className="footer-nav__item footer-nav__item--icon">
                      <svg
                        width="16"
                        height="16"
                        aria-hidden="true"
                        className="footer-nav__tel-icon"
                      >
                        <use href="/images/sprites/symbols.svg#icon-phone"></use>
                      </svg>
                      <a
                        href="tel:+44(0)3002774499"
                        className="footer-nav__link"
                      >
                        + 44 (0) 300 277 44 99
                      </a>
                    </li>

                    <li className="footer-nav__item footer-nav__item--icon">
                      <svg
                        width="24"
                        height="18"
                        aria-hidden="true"
                        className="footer-nav__mail-icon"
                      >
                        <use href="/images/sprites/symbols.svg#icon-mail"></use>
                      </svg>
                      <a href="mailto:" className="footer-nav__link">
                        Email an enquiry
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="footer-primary__sub2">
                <h3>Our Locations</h3>
                Registered Office:
              </div>
            </div>

            <div className="footer-primary__col footer-primary__col--2">
              <h2>Section heading 2</h2>
              <nav aria-label="Section heading 2 Navigation">
                <ol className="footer-nav">
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                </ol>
              </nav>
            </div>

            <div className="footer-primary__col footer-primary__col--3">
              <h2>Section heading 3</h2>
              <nav aria-label="Section heading 3 Navigation">
                <ol className="footer-nav footer-nav--2col">
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item which may span multiple lines
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item which may span multiple lines
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item which may span multiple lines
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                  <li className="footer-nav__item">
                    <a href="" className="footer-nav__link">
                      Navigation item
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="social-links-wrapper">
                <h2 className="social-links-title">Follow Us</h2>
                <ul className="social-links">
                  <li className="social-links__item">
                    <a href="" className="social-links__link">
                      <svg
                        width="30"
                        height="30"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href="/images/sprites/symbols.svg#icon-twitter"></use>
                      </svg>
                      <span className="visually-hidden">Twitter</span>
                    </a>
                  </li>
                  <li className="social-links__item">
                    <a href="" className="social-links__link">
                      <svg
                        width="30"
                        height="30"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href="/images/sprites/symbols.svg#icon-linkedin"></use>
                      </svg>
                      <span className="visually-hidden">LinkedIn</span>
                    </a>
                  </li>
                  <li className="social-links__item">
                    <a href="" className="social-links__link">
                      <svg
                        width="30"
                        height="30"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href="/images/sprites/symbols.svg#icon-instagram"></use>
                      </svg>
                      <span className="visually-hidden">Instagram</span>
                    </a>
                  </li>
                  <li className="social-links__item">
                    <a href="" className="social-links__link">
                      <svg
                        width="30"
                        height="30"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href="/images/sprites/symbols.svg#icon-youtube"></use>
                      </svg>
                      <span className="visually-hidden">YouTube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer
        className="footer-secondary"
        id="footer-secondary"
        role="contentinfo"
      >
        <div className="container-fluid container-fluid--contained">
          <div className="row">
            <div className="copyright-notice-wrapper">
              <p className="copyright-notice">&copy; Copyright Notice 2020</p>
            </div>

            <div className="footer-links-wrapper">
              <ul className="footer-links">
                <li className="footer-links__item">
                  <a href="/contact-us/" className="footer-links__link">
                    Accessibility
                  </a>
                </li>
                <li className="footer-links__item">
                  <a href="/privacy-policy/" className="footer-links__link">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer-links__item">
                  <a href="/site-map/" className="footer-links__link">
                    Site Map
                  </a>
                </li>
                <li className="footer-links__item">
                  <a href="/faqs/" className="footer-links__link">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
