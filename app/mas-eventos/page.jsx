import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider1 from '@/components/Slider1';
import Slider2 from '@/components/Slider2';
import { eventosContent } from '@/content/eventos';


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

export default function EventosPage() {

  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          {/* <nav className="main-nav stick-fixed wow-menubar"> //TODO NOT-GOLD */} 
          <nav className="main-nav dark stick-fixed wow-menubar">
            <Header 
              links={[
                { href: "/#home", text: "Home", className: "active", dataBtnAnimate: "y" },
                { href: "/#contacto", text: "Contacto", dataBtnAnimate: "y" },
              ]}
            />
          </nav>
          
          <main id="main">

            <section
              className={`page-section scrollSpysection pt-5 pb-0  ${
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

                {eventosContent.map((item, index) => (
                  <div className="blog-media mb-140 mb-xs-30" key={index}>
                    {index % 2 === 0
                    ?<Slider1
                        title={item.title}
                        content={item.content}
                        images={item.images}
                      />
                    :<Slider2
                        title={item.title}
                        content={item.content}
                        images={item.images}
                      />
                    }
                  </div>
                ))}

              </div>
            </section>

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
