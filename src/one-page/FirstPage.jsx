/* eslint-disable react/jsx-key */
import educationData from "./data/educationsData";
import experiencesData from "./data/experiencesData";

import htmlcss from '../assets/skills/html-css.svg';
import javascript from '../assets/skills/js.svg';
import angularLogo from "../assets/skills/angular.png";
import reactjs from '../assets/skills/react.svg';
import vuejs from '../assets/skills/vuejs.svg';
import tailwind from '../assets/skills/tailwind-css.svg';
import nodejsLogo from '../assets/skills/nodejs.svg';
import mysql from '../assets/skills/mysql.png';
import illustrator from '../assets/skills/ai.svg';
import photoshop from '../assets/skills/ps.svg';
import indesign from '../assets/skills/id.svg';
import xdLogo from '../assets/skills/xd.svg';
import figma from '../assets/skills/figma.svg';
import cookIt from '../assets/cook-it-logo.svg';

const FirstPage = () => {
  return (
    <div className="firstPage">
      <header>
        <div className="headerContent">
          <h1>Marie Costa</h1>
          <h2>Développeuse full-stack</h2>
        </div>
      </header>

      <main>
        {/*<section className="projectsSection">
          <h3>Réalisation</h3>
          <hr className="line" />

          <div className="cookItProject">
            <a href="https://cook-it.ovh" target="_blank" rel="noreferrer">
              <div>
                <img src={cookIt} alt="cook it logo"/>
              </div>

              <p>Projet de fin de formation - Ilaria Academy</p>
            </a>
          </div>
        </section>*/}

        <section className="skillsSection">
          <h3>Compétences</h3>
          <hr className="line" />

          <div className="wrapperSkillsComponent">
            <div className="skillsComponents">
              <img src={htmlcss} alt="html css" />
              <h4>HTML - CSS - SCSS</h4>
            </div>

            <div className="skillsComponents">
              <img src={javascript} alt="javascript" />
              <h4>Javascript</h4>
            </div>

            <div className="skillsComponents">
              <img src={angularLogo} alt="angular" />
              <h4>Angular</h4>
            </div>

            <div className="skillsComponents">
              <img src={reactjs} alt="react js" />
              <h4>ReactJS</h4>
              <p>(bases)</p>
            </div>

            <div className="skillsComponents">
              <img src={vuejs} alt="vuejs" />
              <h4>Vue JS</h4>
              <p>(bases)</p>
            </div>

            <div className="skillsComponents">
              <img src={tailwind} alt="tailwind" />
              <h4>Tailwind</h4>
              <p>(bases)</p>
            </div>

            <div className="skillsComponents">
              <img src={nodejsLogo} alt="nodejs" />
              <h4>NodeJS</h4>
              <p>(bases)</p>
            </div>

            <div className="skillsComponents">
              <img src={javascript} alt="javascript" />
              <h4>Express JS</h4>
              <p>(bases)</p>
            </div>

            <div className="skillsComponents">
              <img src={mysql} alt="mysql" />
              <h4>MySQL</h4>
              <p>(bases)</p>
            </div>

            <div className="skillsComponents">
              <img src={illustrator} alt="illustrator" />
              <h4>Adobe Illustrator</h4>
            </div>

            <div className="skillsComponents">
              <img src={photoshop} alt="photoshop" />
              <h4>Adobe Photoshop</h4>
            </div>

            <div className="skillsComponents">
              <img src={indesign} alt="indesign" />
              <h4>Adobe InDesign</h4>
            </div>

            <div className="skillsComponents">
              <img src={xdLogo} alt="xd" />
              <h4>Adobe Xd</h4>
            </div>

            <div className="skillsComponents">
              <img src={figma} alt="figma" />
              <h4>Figma</h4>
            </div>
          </div>
        </section>

        <section className="experiencesSection">
          <h3>Expériences</h3>
          <hr className="line" />

          <div className="wrapperExperiencesSection">
            {experiencesData.map((education, index) => (
              <div className="experiencesComponents" key={index}>
                <h4>{education.title}</h4>
                <p>{education.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="educationsSection">
          <h3>Formations</h3>
          <hr className="line" />

          <div className="wrapperEducationsComponents">
            {educationData.map((education, index) => (
              <div className="educationsComponents" key={index}>
                <h4>{education.years}</h4>
                <h5>{education.title}</h5>
                <p>{education.school}</p>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <p>Développé par Marie Costa - Tous droits réservés ©</p>
        </footer>
      </main>
    </div>
  );
};

export default FirstPage;
