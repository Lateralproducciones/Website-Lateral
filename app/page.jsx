import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Home from '@/components';


const dark = false;

export const metadata = {
  title:
    "Lateral Estudio",
  description:
    "productora de eventos y artísticos, corporativos y sociales",
};

const socialLinks = {
  email: "contacto@estudiolateral.com", //TODO Completar con datos correctos
  urlFacebook: "http://www.facebook.com/estudiolateral", //TODO Completar con datos correctos
  urlInstagram: "http://www.instagram.com/estudiolateral", //TODO Completar con datos correctos
}

export default function MainPage() {

  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          {/* <nav className="main-nav stick-fixed wow-menubar"> //TODO NOT-GOLD */} 
          <nav className="main-nav dark stick-fixed wow-menubar">
            <Header 
              links={[
                { href: "#home", text: "Home", className: "active", dataBtnAnimate: "y" },
                { href: "#eventos", text: "Eventos", dataBtnAnimate: "y" },
                { href: "#contacto", text: "Contacto", dataBtnAnimate: "y" },
              ]}
            />
          </nav>
          
          <main id="main">
            <section
              className="home-section parallax-mousemove-scene scrollSpysection"
              id="home"
            >
              <Hero
              urlFacebook = { socialLinks?.urlFacebook }
              urlInstagram = { socialLinks?.urlInstagram }
              />
            </section>

            <Home 
            email = { socialLinks?.email }
            urlFacebook = { socialLinks?.urlFacebook }
            urlInstagram = { socialLinks?.urlInstagram }
            />
          </main>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer socialLinks={[
                {
                  href: socialLinks?.urlInstagram,
                  text: "Instagram",
                },
                {
                  href: socialLinks?.urlFacebook,
                  text: "Facebook",
                },
            ]}/>
          </footer>

        </div>
      </div>
    </>
  );
}
