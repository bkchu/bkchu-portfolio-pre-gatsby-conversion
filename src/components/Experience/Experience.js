import React from 'react';
import Page from '../Page/Page';
import experiences from './experience_util';
const Experience = () => {
  const experienceDisplay = experiences.map(
    ({ experience, description, img, date, url }) => (
      <div key={experience} className="Experience">
        <h1 className="Experience__title">{experience}</h1>
        <p className="Experience__year">{date}</p>
        {!!url && (
          <a className="Experience__link link" target="_blank" href={url}>
            {url}
          </a>
        )}
        <p className="Experience__description">{description}</p>
      </div>
    )
  );

  return (
    <Page title="Experience">
      <div className="Experiences">{experienceDisplay}</div>
    </Page>
  );
};

export default Experience;
