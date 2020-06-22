import React from 'react';

const Testimonials = () => {
  return (<section id="testimonials-section" className="testimonials-section section">
    <h2 className="section-title">Testimonials</h2>

    <div id="testimonials-carousel" className="testimonials-carousel carousel slide" data-interval="8000">

      <ol className="carousel-indicators">
        <li data-target="#testimonials-carousel" data-slide-to="0" className="active"></li>
        <li data-target="#testimonials-carousel" data-slide-to="1"></li>
        <li data-target="#testimonials-carousel" data-slide-to="2"></li>
      </ol>


      <div className="carousel-inner">
        <div className="item carousel-item active">
          <blockquote className="quote">
            <p>
              <span className="icon-holder"><i className="fas fa-quote-left"></i></span>
              James is an excellent software engineer and he is passionate about what he does. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse porttitor metus eros.
            </p>
          </blockquote>
          <div className="source">
            <div className="name">Rob Olson</div>
            <div className="position">Product Manager, Apple</div>
          </div>


        </div>

        <div className="item carousel-item">
          <blockquote className="quote">
            <p>
              <span className="icon-holder"><i className="fas fa-quote-left"></i></span>
              Sed massa leo, aliquet non velit eu, volutpat vulputate odio. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Suspendisse porttitor metus eros, ut fringilla
              nulla auctor a.
            </p>

          </blockquote>
          <div className="source">
            <div className="name">Christina Jensen</div>
            <div className="position">Senior Developer, Twitter</div>
          </div>


        </div>

        <div className="item carousel-item">
          <blockquote className="quote">
            <p>
              <span className="icon-holder"><i className="fas fa-quote-left"></i></span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
            </p>
          </blockquote>
          <div className="source">
            <div className="name">Austin Ward</div>
            <div className="position">CEO, Startup Hub</div>
          </div>

        </div>


      </div>

    </div>


  </section>);
}

export default Testimonials;