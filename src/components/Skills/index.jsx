import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  return (
    <div className="component skills" id="skills">
        <h3>Skills</h3>
        <div class="row">
          <div class="col-sm"><FontAwesomeIcon icon={faHtml5} />HTML / CSS</div>
          <div class="col-sm">JavaScript (ES6+)</div>
          <div class="col-sm">React</div>
          <div class="col-sm">Node.js</div>
        </div>
        <div class="row">
          <div class="col-sm">MongoDB</div>
          <div class="col-sm">Python</div>
          <div class="col-sm">Django</div>
          <div class="col-sm">postgreSQL</div>
        </div>
        {/* <ul>
            <li>HTML / CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Django</li>
            <li>postgreSQL</li>
        </ul> */}
    </div>
  )
}

export default Skills