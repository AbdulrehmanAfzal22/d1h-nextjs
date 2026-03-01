import ImpactStories from "./page/About.section/section";
import DonationHero from "./page/Amount/page";
import PopularSkills from "./page/Skill/page"; 
import GetInvolved from "./page/involved/page";
import TeamSection from "./page/grow/page";
import Impact from "./page/impact/page"
import LatestPosts from "./page/post/page";
import Footer from "./page/savior/page";
import Projects from "./page/projects/page";
import Navbar from "./page/navbar/page";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Projects/>
      <ImpactStories />
      <DonationHero/>
       <PopularSkills />
       <GetInvolved /> 
       <TeamSection />
       <Impact />
       <LatestPosts />
       <Footer />
   

    </div>
  );
}