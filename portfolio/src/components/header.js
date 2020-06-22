import React from 'react';
import { graphql, useStaticQuery } from "gatsby";


const Header = () => {
  const data = useStaticQuery(
    graphql`
      query{
        site {
          siteMetadata {
            name,
            role,
            description,
            email,
            phone,
            site,
            linkedIn,
            github
          }
        }
      }
  `).site.siteMetadata;

  return (
    <header className="header">
      <div className="top-bar container-fluid">
        <div className="actions">
          <a className="btn d-none d-md-inline-block" href={`mailto:${data.email}`}><i className="fas fa-paper-plane" aria-hidden="true"></i> Hire Me</a>
          <a className="btn" href={"../../documents/Warren.Longmire.resume.pdf"}><i className="fas fa-download" aria-hidden="true"></i> Download My Resume</a>
        </div>
        <ul className="social list-inline">
          <li className="list-inline-item"><a target="_blank" href={data.linkedIn}><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
          <li className="list-inline-item"><a target="_blank" href={data.github}><i className="fab fa-github-alt" aria-hidden="true"></i></a></li>
        </ul>
      </div>

      <div className="intro">
        <div className="container text-center">
          <img className="profile-image" src={"../../images/profile-image.png"} alt="profile" />
          <h1 className="name">{data.name}</h1>
          <div className="title">{data.role}</div>
          <div className="profile">
            <p>{data.description}</p>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <div className="container text-center">
          <ul className="list-inline">
            <li className="email list-inline-item"><i className="fas fa-envelope"></i><a href={`mailto:${data.email}`}>{data.email}</a></li>
            <li className="list-inline-item"><i className="fas fa-phone"></i> <a href={`tel: ${data.phone}`}>{data.phone}</a></li>
            <li className="website list-inline-item"><i className="fas fa-globe"></i><a href={data.site} target="_blank">{data.site}</a></li>
          </ul>
        </div>
      </div>

      <div className="page-nav-space-holder d-none d-md-block">
        <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
          <div className="container">
            <ul id="page-nav" className="nav page-nav list-inline">
              <li className="nav-item"><a className="scrollto nav-link" href="#experiences-section">Experiences</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="#education-section">Education</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="#skills-section">Skills</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="#testimonials-section">Testimonials</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="#portfolio-section">Portfolio</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="#contact-section">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;