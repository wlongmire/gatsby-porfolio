import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SkillItem from './skillItem';

const Skills = () => {
  const proSkillData = useStaticQuery(graphql`
    query{
      allContentfulProfessionalSkills{
        edges {
          node {
            skill,
            skillLevel
            yearsInUse,
            description,
            mastery
          }
        }
      }
    }
  `).allContentfulProfessionalSkills.edges;

  return (
    <section id="skills-section" className="skills-section section text-center">
      <h2 className="section-title">Professional Skills</h2>
      <div className="top-skills">
        <h3 className="subtitle">Top Skills</h3>
        <div className="row">
          {
            proSkillData.map(item => <SkillItem item={item.node} />)
          }
        </div>

      </div>

    </section>);
}

export default Skills;