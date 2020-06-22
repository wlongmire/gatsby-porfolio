import React from 'react';

const Portfolio = () => {
  return (<section id="portfolio-section" className="portfolio-section section">
    <h2 className="section-title">Portfolio</h2>
    <ul id="filters" className="filters clearfix">
      <li className="type active" data-filter="*">All</li>
      <li className="type" data-filter=".backend">Back-end</li>
      <li className="type" data-filter=".frontend">Front-end</li>
    </ul>

    <div className="items-wrapper isotope row">
      <div className="item frontend col-lg-3 col-6">
        <div className="item-inner">
          <figure className="figure">
            <img className="img-fluid" src="assets/images/portfolio/portfolio-1.jpg" alt="" />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
            <div className="meta">AngularJS</div>
            <div className="action"><a href="#">View on Github</a></div>
          </div>

          <a className="link-mask" href="#"></a>
        </div>

      </div>

      <div className="item backend col-lg-3 col-6">
        <div className="item-inner">
          <figure className="figure">
            <img className="img-fluid" src="assets/images/portfolio/portfolio-2.jpg" alt="" />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
            <div className="meta">Django</div>
            <div className="action"><a href="#">View on Github</a></div>
          </div>

          <a className="link-mask" href="#"></a>
        </div>

      </div>

      <div className="item backend frontend col-lg-3 col-6">
        <div className="item-inner">
          <figure className="figure">
            <img className="img-fluid" src="assets/images/portfolio/portfolio-3.jpg" alt="" />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
            <div className="meta">Django/JavaScript</div>
            <div className="action"><a href="#">View on Github</a></div>
          </div>

          <a className="link-mask" href="#"></a>
        </div>

      </div>

      <div className="item frontend col-lg-3 col-6">
        <div className="item-inner">
          <figure className="figure">
            <img className="img-fluid" src="assets/images/portfolio/portfolio-4.jpg" alt="" />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
            <div className="meta">ReactJS</div>
            <div className="action"><a href="#">View on Github</a></div>
          </div>

          <a className="link-mask" href="#"></a>
        </div>

      </div>

      <div className="item backend col-lg-3 col-6">
        <div className="item-inner">
          <figure className="figure">
            <img className="img-fluid" src="assets/images/portfolio/portfolio-5.jpg" alt="" />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
            <div className="meta">Python</div>
            <div className="action"><a href="#">View on Github</a></div>
          </div>

          <a className="link-mask" href="#"></a>
        </div>

      </div>

      <div className="item backend col-lg-3 col-6">
        <div className="item-inner">
          <figure className="figure">
            <img className="img-fluid" src="assets/images/portfolio/portfolio-6.jpg" alt="" />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
            <div className="meta">JavaScript</div>
            <div className="action"><a href="#">View on Github</a></div>
          </div>

          <a className="link-mask" href="#"></a>
        </div>

      </div>


      <div className="item frontend col-lg-3 col-6">
        <div className="item-inner">
          <figure className="figure">
            <img className="img-fluid" src="assets/images/portfolio/portfolio-7.jpg" alt="" />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
            <div className="meta">HTML/AngularJS</div>
            <div className="action"><a href="#">View on Github</a></div>
          </div>

          <a className="link-mask" href="#"></a>
        </div>

      </div>


      <div className="item frontend backend col-lg-3 col-6">
        <div className="item-inner">
          <figure className="figure">
            <img className="img-fluid" src="assets/images/portfolio/portfolio-8.jpg" alt="" />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title"><a href="#">Project Lorem Ipsum</a></h3>
            <div className="meta">Python/AngularJS</div>
            <div className="action"><a href="#">View on Github</a></div>
          </div>

          <a className="link-mask" href="#"></a>
        </div>

      </div>


    </div>


  </section>);
}

export default Portfolio;