import React from "react"
import Layout from './../components/layout';
import Experiences from './../components/experiences';
import Education from './../components/education';
import Skills from './../components/skills';
import Testimonials from './../components/testimonials';
import Portfolio from './../components/portfolio';
import Contact from './../components/contact';
import Footer from './../components/footer';

const IndexPage = () => {
  return (
    <Layout>
      <div className="wrapper container">
        <Experiences />
        <Education />
        <Skills />
        <Testimonials />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </Layout>
  );
}

export default IndexPage;