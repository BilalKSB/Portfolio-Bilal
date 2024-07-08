// src/app/page.js
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ThreeDModel from "./components/ThreeDModel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* <Navbar /> */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <div style={{ height: '1800px', width: '100%' }}>
          <ThreeDModel />
        </div> */}
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        
      </div>
      {/* <Footer /> */}
    </main>
  );
}




// import HeroSection from "../app/components/HeroSection";
// import Navbar from "../app/components/Navbar";
// import AboutSection from "../app/components/AboutSection";
// import ProjectsSection from "../app/components/ProjectsSection";
// import EmailSection from "../app/components/EmailSection";
// import Footer from "../app/components/Footer";
// import AchievementsSection from "../app/components/AchievementsSection";
// import "../app/globals.css"; // Importer les styles globaux

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col bg-[#121212]">
//       <Navbar />
//       <div className="container mt-24 mx-auto px-12 py-4">
//         <HeroSection />
//         <AchievementsSection />
//         <AboutSection />
//         <ProjectsSection />
//         <EmailSection />
//       </div>
//       <Footer />
//     </main>
//   );
// }
