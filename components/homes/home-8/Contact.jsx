"use client";
import React, { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact({ email = "", urlFacebook = "", urlInstagram = "" }) {

  const [submitStatusText, setSubmitStatusText] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
    .then(() => {
      setSubmitStatusText('Mensaje enviado correctamente');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitStatusText("");
      }, 5000);
    }, () => {
      setSubmitStatusText('Error al enviar el mensaje.');
    })
  };

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
            <a href={`mailto:${ email }`} className="text-link">
              { email } 
            </a>

          </p>
          <p>
            O dejarnos un mensaje para que nos contactemos:
          </p>
          <div>

            {urlFacebook &&
            <a 
              href={urlFacebook} 
              className="hs-social-link d-inline-flex me-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="visually-hidden">Facebook</span> 
              <i className="fa-facebook-f" />
            </a> }

            {urlInstagram && 
            <a 
              href={urlInstagram} 
              className="hs-social-link d-inline-flex" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="visually-hidden">Instagram</span>
              <i className="fa-instagram" />
            </a>}


          </div>
        </div>
      </div>
      <div className="col-md-7 offset-md-1">
        {/* Contact Form */}
        <form
          onSubmit={ handleSubmit }
          className="form contact-form"
          id="contact_form"
        >

          {!submitStatusText
          ?<>
            <div className="row mb-30">
              <div className="col-lg-6 mb-md-30">
                {/* Name */}
                <label htmlFor="name" className="visually-hidden">
                  Nombre
                </label>
                <input
                  id="name"
                  className="input-lg input-circle form-control"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={ formData.name }
                  onChange={handleChange}
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
                  id="email"
                  className="input-lg input-circle form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={ formData.email }
                  onChange={handleChange}
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
                id="message"
                className="input-lg input-circle form-control"
                name="message"
                placeholder="Mensaje"
                value={ formData.message }
                onChange={handleChange}
                pattern=".{1,100}"
                style={{ height: 130 }}
              />
            </div>
            {/* End Message */}
          </>
          :<h3 className="d-flex justify-content-center align-items-center section-caption black fs-5 mb-50" style={{ height:'220px', padding: '30px', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #3a3b3b', textAlign: 'center' }}>
            { submitStatusText }
          </h3>}
          

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
                  <span className="btn-ellipse-hovered" aria-hidden="true">Enviar mensaje</span>
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
