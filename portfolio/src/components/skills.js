import React from 'react';

const Skills = () => {
  return (
    <section id="skills-section" className="skills-section section text-center">
      <h2 className="section-title">Professional Skills</h2>
      <div className="top-skills">
        <h3 className="subtitle">Top Skills</h3>
        <div className="row">
          <div className="item col-12 col-md-4">
            <div className="item-inner">
              <div className="chart-easy-pie text-center">
                <div className="chart-theme-1 chart" data-percent="98"><span>98</span>%</div>
              </div>
              <h4 className="skill-name">Python &amp; Django</h4>
              <div className="level">Expert, 8 years</div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                        </div>
            </div>

          </div>

          <div className="item col-12 col-md-4">
            <div className="item-inner">
              <div className="chart-easy-pie text-center">
                <div className="chart-theme-1 chart" data-percent="90"><span>90</span>%</div>
              </div>
              <h4 className="skill-name">JavaScript</h4>
              <div className="level">Expert, 8 years</div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                        </div>
            </div>

          </div>

          <div className="item col-12 col-md-4">
            <div className="item-inner">
              <div className="chart-easy-pie text-center">
                <div className="chart-theme-1 chart" data-percent="85"><span>85</span>%</div>
              </div>
              <h4 className="skill-name">React &amp; Angular</h4>
              <div className="level">Advanced, 4 years</div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                        </div>
            </div>

          </div>

        </div>

      </div>


      <div className="other-skills">
        <h3 className="subtitle">Other Skills</h3>
        <div className="misc-skills">
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS3</span>
          <span className="skill-tag">SASS</span>
          <span className="skill-tag">LESS</span>
          <span className="skill-tag">Git</span>
          <br />
          <span className="skill-tag">Ruby</span>
          <span className="skill-tag">PHP</span>
          <span className="skill-tag">Wireframe</span>
          <span className="skill-tag">Spanish</span>
          <span className="skill-tag">French</span>
        </div>
      </div>


    </section>);
}

export default Skills;