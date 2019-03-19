import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <ul>
          <li className="item">
            <div className="prefix pull-left">
              <h1>01</h1>
            </div>
            <div className="content pull-left">
              <h1>Hamed Montazeri</h1>
              <p>
                I'm a Software Engineer with over 5 years experience in the
                field building applications.
              </p>
            </div>
            <div className="clearfix" />
          </li>

          <li className="item">
            <div className="prefix pull-left">
              <h2>02</h2>
            </div>
            <div className="content pull-left">
              <h2>Skill Set</h2>
              <div className="33-3">
                <ul>
                  <li>
                    <span className="typcn typcn-scissors" /> Solution Architect
                  </li>
                  <li>
                    <span className="typcn typcn-code" /> Software Development
                  </li>
                  <li>
                    <span className="typcn typcn-weather-cloudy" /> Cloud
                    Architect
                  </li>
                  <li>
                    <span className="typcn typcn-brush" /> UI/UX Design
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearfix" />
          </li>

          <li className="item">
            <div className="prefix pull-left">
              <h3>03</h3>
            </div>
            <div className="content pull-left">
              <h3>Technical Skill</h3>
              <div className="33-3">
                <ul>
                  <li>Node / React</li>
                  <li>Java / Spring / Kotlin / Android</li>
                  <li>Ruby on Rails</li>
                  <li>Swift / iOS</li>
                  <li>SQL / NoSQL</li>
                  <li>AWS / GCloud</li>
                </ul>
              </div>
            </div>
            <div className="clearfix" />
          </li>

          <li className="item">
            <div className="prefix pull-left">
              <h4>04</h4>
            </div>
            <div className="content pull-left">
              <h4>Education</h4>
              <div className="33-3">
                <p className="pull-left">
                  2015 - Bachelor of Science <br /> Hochschule Heilbronn,
                  Germany
                </p>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
