import React from "react";

export default function Footer2({ socialLinks = [] }) {
  return (
    <div className="container">
      <div className="page-section">
        <div className="row">
          {/* Copyright */}
          <div className="col-lg-3 text-center text-lg-start mb-md-50">
            Wered {new Date().getFullYear()}.
          </div>
          {/* End Copyright */}
          {/* Social Links */}
          <div className="col-lg-6 fw-social-inline text-center mb-md-40">

            {socialLinks.map((item, index) => (
              <div key={index} className="fw-social-inline-item">
                <a
                  href={item.href}
                  target="_blank"
                  rel="nofollow noopener"
                  className="link-hover-anim align-middle"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">{item.text}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">{item.text}</span>
                  </span>
                </a>
              </div>
            ))}

          </div>
          {/* End Social Links */}
          <div className="col-lg-3 text-center text-lg-end local-scroll">
            <a href="#top" className="fw-top-link">
              <span className="fw-top-link-underline">Volver</span>
              <span className="icon ms-3">
                <i className="icon-arrow-up1 size-22" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
