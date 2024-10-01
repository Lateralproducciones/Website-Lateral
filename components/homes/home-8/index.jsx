import React from "react";
import Image from "next/image";
import Contact from "./Contact";
import Accordion from "./Accordion";
import Slider1 from '@/components/elements/Slider1';
import Slider2 from '@/components/elements/Slider2';

export default function Home8({
  onePage = false,
  dark = false,
  eadge2 = false,
}) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection ${
          dark ? "bg-dark-2 " : "bg-dark-1"
        }  light-content`}
        id="about"
      >
        {dark || eadge2 ? <></> : <div className="edge-top-figure-1" />}
        {/* Env Round Edge */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-descr-extralarge mb-100 mb-md-60 wow linesAnimIn"
                data-splitting="lines"
              >
                <h2 className="section-title-inline-1">Quiénes somos</h2>
                Lateral Estudio es una productora que busca por sobre todas las cosas
                contar historias a través de experiencias únicas.
                <br/>
                Creemos en la necesidad de pensar fuera de la caja para crear eventos y 
                momentos que desafían lo convencional y dar voz a quienes quieran compartir algo  con el mundo.
              </div>
              {/* Accordion */}
              <Accordion content={[
                {
                  question: "¿Qué hacemos?",
                  answer: `Contamos historias mediante la producción de eventos artísticos, corporativos y sociales, pero también a través de otros formatos creativos.
                  Desde la presentación de artistas emergentes hasta figuras con relatos de vida impactantes, 
                  diseñamos experiencias que conecta personas, ideas y emociones, transmitiendo mensajes que inspiran.`,
                },
                {
                  question: "¿Cómo lo hacemos?",
                  answer: `El pensamiento lateral  es nuestra base para diseñar eventos que se destaquen. 
                  Cada proyecto es una oportunidad para ver las cosas desde una nueva perspectiva y crear soluciones creativas que sorprendan. 
                  Trabajamos de la mano con nuestros clientes para transformar ideas en eventos auténticos que comunican historias poderosas.`,
                },
                // {
                //   question: "¿En qué nos diferenciamos?",
                //   answer: `Nos diferenciamos por nuestro enfoque en contar historias a través de eventos. 
                //   No solo organizamos experiencias; las construimos a partir de ideas fuera de lo común, 
                //   utilizando la creatividad para darle forma a relatos que capturan y mueven a la audiencia.`,
                // },
                {
                  question: "¿A qué público apuntamos?",
                  answer: `Apuntamos a personas, empresas y organizaciones que buscan algo más que un evento tradicional. 
                  Nos dirigimos a aquellos que desean contar su historia o comunicar su mensaje de forma creativa, 
                  ya sea a través de eventos culturales, corporativos o personales.`,
                },
              ]}/>
              {/* End Accordion */}
              <div
                className="page-section scrollSpysection  pb-0"
                id="established"
              >
                <div className="position-relative text-center pt-140 pt-sm-100 pb-140 pb-sm-100">
                  <div className="position-relative z-index-1">
                    <h2 className="hs-title-5 font-alt overflow-hidden mb-60 mb-sm-40">
                      <span className="d-inline-block wow fadeRotateIn">
                        Contamos
                      </span>
                      <span className="d-inline-block wow fadeRotateIn">
                        historias
                      </span>
                    </h2>
                    <div className="row">
                      <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                        <p className="section-descr mb-0">
                          No solo organizamos experiencias, damos forma a relatos que capturan y conmueven a la audiencia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="section-image-behind">
                    <Image
                      src="/assets/images/demo-modern/section-image-1.jpg"
                      loading="lazy"
                      width={820}
                      height={1270}
                      alt="Image Description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  pt-0 pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="eventos"
      >
        <div className="container">
          <div className="mt-100 mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  Eventos
                </h2>
              </div>
            </div>
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>
          <div className="blog-media mb-140 mb-xs-30">
            <Slider1
              title= "Evento"
              text= "Un evento innovador que se destacó por el mensaje transmitido."
              imageData={[
                {
                  placeholderSrc: "/assets/images/placeholder.png",
                  dataSrc: "/assets/images/full-width-images/section-bg-8.jpg",
                  alt: "Image Description 1",
                },
                {
                  placeholderSrc: "/assets/images/placeholder.png",
                  dataSrc: "/assets/images/full-width-images/section-bg-9.jpg",
                  alt: "Image Description 2",
                },
              ]}
            />
          </div>
          <div className="blog-media mb-140 mb-xs-30">
            <Slider2
              title= "Evento"
              text= "Un evento innovador que se destacó por el mensaje transmitido."
              imageData={[
                {
                  placeholderSrc: "/assets/images/placeholder.png",
                  dataSrc: "/assets/images/full-width-images/section-bg-8.jpg",
                  alt: "Image Description 1",
                },
                {
                  placeholderSrc: "/assets/images/placeholder.png",
                  dataSrc: "/assets/images/full-width-images/section-bg-9.jpg",
                  alt: "Image Description 2",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contacto"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">Contacto</h2>
              </div>
            </div>
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>

          <Contact />
        </div>
      </section>
    </>
  );
}
