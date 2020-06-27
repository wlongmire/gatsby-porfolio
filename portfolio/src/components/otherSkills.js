import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const OtherSkills = () => {
  const otherSkillData = useStaticQuery(graphql`
    query{
      allContentfulOtherSkills{
        edges {
          node {
            id,
            skillName
          }
        }
      }
    }
  `).allContentfulOtherSkills.edges;

  return (
    <section id="other-skills-section" className="skills-section section text-center">
      <div className="other-skills">
        <h3 className="subtitle">Other Skills</h3>
        <div className="misc-skills">
          {
            otherSkillData.map(skill => (
              <span key={skill.node.id} className="skill-tag">{skill.node.skillName}</span>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default OtherSkills;