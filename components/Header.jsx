"use client";
import { toggleMobileMenu } from "@/utilities/toggleMobileMenu";
import Nav from "./Nav";
import Image from "next/image";

export default function Header({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">

      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <a href="#top" className="logo">
          <Image
            src="/assets/images/LTRL-BK.svg"
            alt="Lateral Estudio Logo"
            width={113}
            height={68}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/LTRL-WHITE.svg"
            // src="/assets/images/LTRL-GOLD.svg"
            priority="high"
            alt="Lateral Estudio logo"
            width={113}
            height={68}
            className="dark-mode-logo"
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>

      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={links} animateY />
        </ul>
      </div>
      {/* End Main Menu */}

    </div>
  );
}
