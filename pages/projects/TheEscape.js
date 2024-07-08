// /pages/projects/TheEscape.js
import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "@/app/globals.css"; // Importer les styles globaux
import "../styles/TheEscape.css"; // Importer les styles spécifiques à cette page
import { useEffect } from "react";
// import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(TextPlugin);

const TheEscape = () => {
  useEffect(() => {
    // gsap.to(".main-title .small", { text: "the", duration: 1 });
    // gsap.to(".main-title .heavy", { text: "escape", duration: 1 });

    document.getElementById("project-cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("project-card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto mt-24 px-12 py-4 flex-grow">
        <div className="background"></div>
        {/* <div className="hero-bg absolute top-0 left-0 w-screen h-screen block">
          <video muted loop autoPlay className="video-player">
            <source src="/images/Trailer-JPO.mp4" type="video/mp4" />
          </video>
        </div> */}
        {/* <header>
          <div className="logo">
            <img src="/images/logo.svg" alt="Logo" />
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/">Trailer</a></li>
              <li><a href="/">Staff</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="platform-icons">
            <ul>
              <li><img src="/images/playstation.svg" alt="PlayStation" /></li>
              <li><img src="/images/windows.svg" alt="Windows" /></li>
              <li><img src="/images/xbox.svg" alt="Xbox" /></li>
              <li><img src="/images/steam.svg" alt="Steam" /></li>
            </ul>
          </div>
        </header> */}
        <div className="main-hero h-screen w-screen flex justify-start flex-col pt-40 align-center text-center">
  <h1 className="main-title w-full height">
    <text x="20" y="35" className="small">the</text>
    <br />
    <text x="65" y="55" className="heavy">escape</text>
  </h1>
  <div className="hero-element flex flex-col align-center justify-center">
    <div className="left-text flex justify-center align-center">
      *le jeu est aussi disponible en VR
    </div>
    <div className="call-to-action flex flex-col justify-center align-center mt-4">
      <a className="secondary p-4" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <div className="download-content">
        <Image src="/images/windows-fill.svg" alt="Windows" width={24} height={24} />
          <span>Télécharger sur Windows</span>
        </div>
      </a>
    </div>
  </div>
</div>
        <div className="team-section">
          <ul className="team-members">
            <li>Astélie</li>
            <li> · </li>
            <li>Bilal</li>
            <li> · </li>
            <li>Esther</li>
            <li> · </li>
            <li>Hugo</li>
            <li> · </li>
            <li>Nabil</li>
            <li> · </li>
            <li>Tom</li>
          </ul>
          <h2 className="team-description">L`équipe à l`origine de la licence<span className="strong">The escape</span></h2>
        </div>
        <div className="project-cards" id="project-cards">
          <div className="project-card">
            <h2 className="card-number">01</h2>
            <h4 className="job-title">Modélisation 3D</h4>
            <h3 className="member-name">Asterie</h3>
          </div>
          <div className="project-card">
            <h2 className="card-number">02</h2>
            <h4 className="job-title">Intégration VR</h4>
            <h3 className="member-name">Esther</h3>
          </div>
          <div className="project-card">
            <h2 className="card-number">03</h2>
            <h4 className="job-title">Développeur Web</h4>
            <h3 className="member-name">Hugo</h3>
          </div>
          <div className="project-card">
            <h2 className="card-number">04</h2>
            <h4 className="job-title">Développeur web</h4>
            <h3 className="member-name">Tom</h3>
          </div>
          <div className="project-card">
            <h2 className="card-number">05</h2>
            <h4 className="job-title">Programmeur</h4>
            <h3 className="member-name">Bilal</h3>
          </div>
          <div className="project-card">
            <h2 className="card-number">06</h2>
            <h4 className="job-title">Programmeur</h4>
            <h3 className="member-name">Nabil</h3>
          </div>
        </div>
        <div className="immersive-gameplay-section">
          <h2 className="section-title">premier étage</h2>
          <p className="section-paragraph">
            Un étage fidèle à la vision commune des backrooms.
          </p>
          <div className="section-cta">
  
          </div>
          <div className="section-images">

          <Image className="backroom1" src="/images/backroom1.png" alt="Immersive Gameplay Image 2" width={500} height={300} />
          <Image className="backroom2" src="/images/backroom2.png" alt="Immersive Gameplay Image 1" width={500} height={300} />
          </div>
        </div>
        <div className="immersive-gameplay-section">
          <h2 className="section-title">deuxième étage</h2>
          <p className="section-paragraph">
            Un étage faisent étrangement référence à l`hôtel de Shining.
          </p>
          <div className="section-cta">
            {/* <button className="secondary-cta" onClick={() => window.location.href='https://hugodelacour.com'}>En voir +</button> */}
          </div>
          <div className="section-images">
          <Image className="shining1" src="/images/shining1.png" alt="Immersive Gameplay Image 2" width={500} height={300} />
          <Image className="shining2" src="/images/shining2.png" alt="Immersive Gameplay Image 2" width={500} height={300} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TheEscape;
