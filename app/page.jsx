import Header8 from '@/components/headers/Header8';
import Footer2 from '@/components/footers/Footer2';
import Hero1 from '@/components/homes/home-8/heros/Hero1';
import Home8 from '@/components/homes/home-8';

const dark = false;

export const metadata = {
  title:
    "Lateral Estudio",
  description:
    "productora de eventos y artísticos, corporativos y sociales",
};

export default function Home() {
  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav dark stick-fixed wow-menubar">
            <Header8 
              links={[
                { href: "#home", text: "Home", className: "active", dataBtnAnimate: "y" },
                { href: "#eventos", text: "Eventos", dataBtnAnimate: "y" },
                { href: "#contacto", text: "Contacto", dataBtnAnimate: "y" },
              ]}
              // links={[
              //   { id: 1, href: "/modern-multi-page", text: "Home" },
              //   { id: 4, href: "/modern-portfolio", text: "Eventos" },
              //   { id: 6, href: "/modern-contact", text: "Contacto" },
              // ]} 
            />
          </nav>
          <main id="main">
            <section
              className="home-section parallax-mousemove-scene scrollSpysection"
              id="home"
            >
              <Hero1 />
            </section>

            <Home8 />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 socialLinks={[
                {
                  href: "#",
                  text: "Instagram",
                },
                {
                  href: "#",
                  text: "Facebook",
                },
            ]}/>
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
