import React from 'react';

const Education = () => {
  return (
    <section id="education-section" className="education-section section">
      <h2 className="section-title">Education</h2>
      <div className="row">
        <div className="item col-12 col-md-4">
          <div className="item-inner">
            <h3 className="degree">MSc Computer Science</h3>
            <div className="education-body">
              University College of London
              </div>

            <div className="time">2011 - 2012</div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
      </div>
          </div>

        </div>

        <div className="item col-12 col-md-4">
          <div className="item-inner">
            <h3 className="degree">MSc Applied Mathematics</h3>
            <div className="education-body">
              University of Bristol
      </div>

            <div className="time">2010 - 2011</div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
      </div>
          </div>

        </div>

        <div className="item col-12 col-md-4">
          <div className="item-inner">
            <h3 className="degree">BSc Creative Technology</h3>
            <div className="education-body">
              University of Bristol
      </div>
            <div className="time">2007 - 2010</div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
      </div>
          </div>
        </div>
      </div>
    </section>);
}

export default Education;