/* eslint-disable react/jsx-key */
//import skillsData from "../one-page/data/skillsData";
import skillsData from "./data/skillsData";
import educationData from "./data/educationsData";
import experiencesData from "./data/experiencesData";

const FirstPage = () => {
  return (
    <div className="firstPage">
      <header>
        <h1>Marie Costa</h1>
        <h2>Développeuse front-end</h2>

        <p>Objectif : Développeuse full-stack</p>
      </header>

      <main>
        <section className="skillsSection">
          <h3>Compétences</h3>
          <hr className="line" />

          <div className="wrapperSkillsComponent">
            {skillsData.map((skill, index) => (
              <div className="skillsComponents" key={index}>
                <img src={skill.image} alt={skill.text} />
                <h4>{skill.text}</h4>
                <p>{skill.caption}</p>
              </div>
            ))}
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
