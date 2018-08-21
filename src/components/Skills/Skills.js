import React from 'react';
import Page from '../Page/Page';
import skills from './skill_util';
const Skills = () => {
  const skillsDisplay = skills.map(({ skill, img, url }) => (
    <div className="Skill" key={skill}>
      <p className="Skill__title">{skill}</p>
      <a className="Skill__link" href={url} target="_blank">
        <img className="Skill__img" src={img} alt={skill} />
      </a>
    </div>
  ));

  return (
    <Page title="Skills">
      <h1 className="Skills__header">Tech + Tools</h1>
      <div className="Skills">{skillsDisplay}</div>
    </Page>
  );
};

export default Skills;
