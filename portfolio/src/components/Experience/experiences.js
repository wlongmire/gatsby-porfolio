import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ExperienceItem from './experienceItem';

const Experiences = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulWorkExperiences(
        sort: {
          fields:order,
          order:ASC  
        }
      ) {
        edges{
          node {
            id,
            workplace,
            workTitle,
            startYear,
            endYear,
            location,
            order,
            description {
              json
            }
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
          <ExperienceItem key={item.node.id} item={item.node} />
        ))
      }

    </div>

  </section>);
}

export default Experiences;