import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ExperienceItem from './subcomponents/experienceItem';

const Experiences = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulWorkExperiences(
        sort: {
          fields:order,
          order:DESC  
        }
      ) {
        edges{
          node {
            workplace,
            workTitle,
            startYear,
            endYear,
            location,
            order
          }
        }
      }
    }
  `).allContentfulWorkExperiences.edges;

  return (<section id="experiences-section" className="experiences-section section">
    <h2 className="section-title">Work Experiences</h2>
    <div className="timeline">
      {
        data.map((item) => (
          <ExperienceItem item={item.node} />
        ))
      }

    </div>

  </section>);
}

export default Experiences;