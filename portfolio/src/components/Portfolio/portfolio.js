import React from 'react';
import PortfolioItem from './portfolioItem';
import { graphql, useStaticQuery } from 'gatsby';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulPortfolio{
        edges {
          node {
            id,
            name,
            mainTechnology,
            github,
            type
          }
        }
      }
    }
  `).allContentfulPortfolio.edges;

  console.log(data);

  return (<section id="portfolio-section" className="portfolio-section section">
    <h2 className="section-title">Portfolio</h2>
    <ul id="filters" className="filters clearfix">
      <li className="type active" data-filter="*">All</li>
      <li className="type" data-filter=".backend">Back-end</li>
      <li className="type" data-filter=".frontend">Front-end</li>
    </ul>

    <div className="items-wrapper isotope row">
      {
        data.map(item => (
          <PortfolioItem key={item.node.id} item={item.node} />
        ))
      }
    </div>

  </section>);
}

export default Portfolio;