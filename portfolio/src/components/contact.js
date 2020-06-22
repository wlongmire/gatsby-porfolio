import React from 'react';

const Contact = () => {
  return (<section id="contact-section" className="contact-section section">
    <h2 className="section-title">Get in Touch</h2>
    <div className="intro">
      <img className="profile-image" src="./../../images/profile-image.png" alt="" />
      <div className="dialog">
        <p>I'm currently taking on freelance work. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
        parturient montes. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
              vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
        <p><strong>I can help with the following:</strong></p>
        <ul className="list-unstyled service-list">
          <li><i className="fas fa-check" aria-hidden="true"></i> App development with ReactJS</li>
          <li><i className="fas fa-check" aria-hidden="true"></i> Front-end development with AngularJS</li>
          <li><i className="fas fa-check" aria-hidden="true"></i> Back-end development with Django/Python</li>
          <li><i className="fas fa-check" aria-hidden="true"></i> UI development</li>
          <li><i className="fas fa-check" aria-hidden="true"></i> UX prototyping</li>
        </ul>
        <p>Drop me a line at <a href="mailto:someone@example.com">james.doe@website.com</a> or call me at <a
          href="tel:01234567890">0123 456 7890</a></p>
        <ul className="social list-inline">
          <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"
            aria-hidden="true"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt"
            aria-hidden="true"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-skype" aria-hidden="true"></i></a>
          </li>
        </ul>

      </div>

    </div>


  </section>);
}

export default Contact;