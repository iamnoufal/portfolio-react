import './App.css';

import IntroImg from 'assets/images/intro.webp';

import IntroComponent from "components/intro";
import AboutComponent from 'components/about';
import EducationComponent from 'components/education';
import LearningsComponent from 'components/learning';
import TimelineComponent from 'components/timeline';
import TimelineSpeedDialComponent from 'components/timline-speeddial';
import ProjectsComponent from 'components/projects';
import ContactComponent from 'components/contact';
import SkillsComponent from 'components/skills';

const App = () => {
  return (
    <main style={{ background: `url(${IntroImg})`, backgroundXPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
      <IntroComponent />
      <TimelineComponent />
      <TimelineSpeedDialComponent />
      <AboutComponent />
      <EducationComponent />
      <LearningsComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
    </main>
  )
}

export default App;