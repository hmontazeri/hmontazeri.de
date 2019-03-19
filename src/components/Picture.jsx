import React from 'react';
import hamed from '../images/hamed.jpg';

const Picture = () => (
  <div className="picture">
    <div className="picture-wrapper">
      <img src={hamed} alt="Hamed Montazeri" />
    </div>
    <div className="contact">
      <a href="mailto:hamed.mon@gmail.com">
        <span className="typcn typcn-social-at-circular" />
      </a>
      <a href="https://github.com/hmontazeri">
        <span className="typcn typcn-social-github-circular" />
      </a>
      <a href="https://linkedin.com/in/hmontazeriger">
        <span className="typcn typcn-social-linkedin-circular" />
      </a>
    </div>
  </div>
);

export default Picture;
