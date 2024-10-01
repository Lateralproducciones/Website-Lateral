"use client";
import React from "react";

export default function Contact() {
  return (
    <div className="row">
      <div className="col-md-4 mb-sm-60">
        <div className="section-descr black">
          <p>
            Nos interesa trabajar con personas, empresas y organizaciones que busquen algo más que un evento tradicional.
          </p>
          <p>
            {/* Change the email address inside and link tag and href attribute */}
            Nos podés enviar un  correo a:
            <a href="mailto:contacto@estudiolateral.com" className="text-link">
              contacto@estudiolateral.com 
            </a> 
            {/* //TODO correo? */}
          </p>
          <p>
            O dejarnos un mensaje para que los contactemos:
          </p>
          <div>
            <a href="#" className="hs-social-link d-inline-flex me-1">
              <span className="visually-hidden">Facebook</span> 
              <i className="fa-facebook-f" />
            </a> 
            {/* //TODO redes facebook? */}
            <a href="#" className="hs-social-link d-inline-flex">
              <span className="visually-hidden">Instagram</span> 
              <i className="fa-instagram" />
            </a> 
            {/* //TODO redes Instagram? */}
          </div>
        </div>
      </div>
      <div className="col-md-7 offset-md-1">
        {/* Contact Form */}
        <form
          onSubmit={(e) => e.preventDefault()} //TODO Desarrollar envío de correo electrónico por form
          className="form contact-form"
          id="contact_form"
        >
          <div className="row mb-30">
            <div className="col-lg-6 mb-md-30">
              {/* Name */}
              <label htmlFor="name" className="visually-hidden">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input-lg input-circle form-control"
                placeholder="Nombre"
                pattern=".{3,100}"
                required
                aria-required="true"
              />
              {/* End Name */}
            </div>
            <div className="col-lg-6">
              {/* Email */}
              <label htmlFor="email" className="visually-hidden">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-lg input-circle form-control"
                placeholder="Email"
                pattern=".{5,100}"
                required
                aria-required="true"
              />
              {/* End Email */}
            </div>
          </div>
          {/* Message */}
          <div className="mb-50">
            <label htmlFor="message" className="visually-hidden">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              className="input-lg input-circle form-control"
              style={{ height: 130 }}
              placeholder="Mensaje"
              defaultValue={""}
            />
          </div>
          {/* End Message */}
          <div className="row">
            <div className="col-xs-4 col-lg-6 mb-md-30">
              {/* Send Button */}
              <button
                className="submit_btn btn btn-mod btn-white btn-circle btn-ellipse"
                data-btn-animate="ellipse"
                id="submit_btn"
                aria-controls="result"
              >
                <span className="btn-ellipse-inner">
                  <span className="btn-ellipse-unhovered">Enviar mensaje</span>
                  <span className="btn-ellipse-hovered" aria-hidden="true">
                    Enviar mensaje
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div
            id="result"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          />
        </form>
        {/* End Contact Form */}
      </div>
    </div>
  );
}
