"use client";
import React from "react";
import Image from "next/image";
import { useIsMobile } from '@/utlis/isMobile';


export default function Hero1({ urlFacebook, urlInstagram }) {
  const isMobile = useIsMobile()

  return (
    <div className="container min-height-95vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120 ">
      {/* Home Section Content */}
      <div className="home-content pb-sm-60 text-start position-relative">

        
        <h1 className="hs-title-5 font-alt overflow-hidden mb-30 mb-sm-20">
          <span className="d-block text-center wow fadeRotateIn">
            <Image
              className="hs-image-2 wow fadeInRight"
              data-wow-delay="0.8s"
              data-wow-offset={0}
              // src="/assets/images/open-box-logo.svg" //TODO NOT-GOLD
              src="/assets/images/asterisk_gold.svg"
              width={100}
              height={100}
              alt="Caja abierta"
            />{" "}
            Lateral
          </span>
          <span
            className={`${isMobile?"":"hero__text-2"} | d-block text-center wow fadeRotateIn`}
            data-wow-delay="0.4s"
            data-wow-offset={0}
          >
            Estudio{" "}
          </span>
        </h1>

        <h2
          className="hs-title-6 font-alt text-center mb-sm-20 wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-offset={0}
        >
          Creamos eventos y momentos que <strong>desafían lo convencional</strong>
        </h2>
        <p className="hs-paragraph-2 wow clipRightIn" data-wow-delay="0.8s">
          Somos una productora que busca por sobre todo <strong>contar historias</strong> a través de experiencias únicas
        </p>

        <div
          className="hs-line d-none d-sm-block wow fadeIn parallax-mousemove"
          data-offset={60}
          data-wow-delay="0.8s"
        >
          {" "}
        </div>
      </div>
      {/* End Home Section Content */}

      {/* Social Media Links */}
      <div className="hs-social left wow fadeInUp">

        {urlInstagram &&
        <a 
          href={urlInstagram} 
          className="hs-social-link mb-3" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="visually-hidden">Facebook</span> 
          <i className="fa-instagram" />
        </a>}
        {urlFacebook &&
        <a 
          href={urlFacebook} 
          className="hs-social-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="visually-hidden">Facebook</span> 
          <i className="fa-facebook-f" />
        </a>}

      </div>
      {/* End Social Media Links */}

    </div>
  );
}
