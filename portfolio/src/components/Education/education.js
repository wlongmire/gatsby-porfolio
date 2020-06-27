import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import EducationItem from './educationItem';

const Education = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulEducation{
        edges {
          node {
            id,
            degree,
            startYear,
            endYear,
            school,
            id
          }
        }
      }
    }
  `).allContentfulEducation.edges;


  return (
    <section id="education-section" className="education-section section">
      <h2 className="section-title">Education</h2>
      <div className="row">
        {
          data.map((item) => {
            return (
              <div key={item.node.id} className="item col-12 col-md-4">
                <div className="item-inner">
                  <EducationItem item={item.node} />
                </div>
              </div>
            );
          })
        }
      </div>
    </section>);
}

export default Education;