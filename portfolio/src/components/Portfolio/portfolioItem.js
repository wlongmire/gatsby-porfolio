import React from 'react';
import classnames from 'classnames';

const PortfolioItem = ({ item }) => {
  console.log(item);

  return (
    <div className={`item ${item.type} col-lg-3 col-6`}>
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
    </div >
  );
}

export default PortfolioItem;