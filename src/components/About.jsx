import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>Hamed Montazeri</h1>
        <p>
          Currently working for <a href="http://mhp.com">MHP - A Porsche Company</a> in Atlanta,
          Georgia as a Senior Software Engineer / Senior Consultant. I do architecure, write code
          and lead a team.
        </p>
        <p>
          Startet coding <b>2008</b> in Schwaebisch Hall, Germany. University of Heilbronn tought me{' '}
          <b>Java</b>. Fell in Love with script languages. Did <b>Rails</b>, found and got addicted
          to <b>JavaScript / NodeJS</b>.
        </p>
        <p>
          Ever since I did a lot of projects with <b>Java (Spring)</b>, <b>Rails</b> and{' '}
          <b>AngularJS</b>. Now focused on <b>Serverless (λ)</b> API's with{' '}
          <b>React / React Native</b>.
        </p>
        <p />
      </div>
    );
  }
}

export default About;
