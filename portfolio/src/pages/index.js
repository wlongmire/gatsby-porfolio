import React from "react"
import Layout from './../components/layout';
import Experiences from './../components/Experience/experiences';
import Education from '../components/Education/education';
import Skills from './../components/Skills/skills';
import OtherSkills from './../components/otherSkills';
import Testimonials from './../components/testimonials';
import Portfolio from './../components/Portfolio/portfolio';
import Contact from './../components/contact';
import Footer from './../components/footer';

const IndexPage = () => {
  return (
    <Layout>
      <div className="wrapper container">
        <Experiences />
        <Education />
        <Skills />
        <OtherSkills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </Layout>
  );
}

export default IndexPage;