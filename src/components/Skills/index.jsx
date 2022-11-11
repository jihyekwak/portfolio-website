import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faJs, faReact, faNodeJs, faPython, faDb } from '@fortawesome/free-brands-svg-icons';
// import {faNodeJs} from '@fortawesome/free-brands-svg-icons';
// import {faPython} from '@fortawesome/free-brands-svg-icons';
// import {faReact} from '@fortawesome/free-brands-svg-icons';
// import {faReact} from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
  return (
    <div className="component skills" id="skills">
        <h3>Skills</h3>
        <div class="row">
          <div class="col-sm"><FontAwesomeIcon icon={faHtml5} size="2x"/> HTML / CSS</div>
          <div class="col-sm"><FontAwesomeIcon icon={faJs} size="2x"/> JavaScript (ES6+)</div>
          <div class="col-sm"><FontAwesomeIcon icon={faReact} size="2x"/> React</div>
          <div class="col-sm"><FontAwesomeIcon icon={faNodeJs} size="2x"/> Node.js</div>
        </div>
        <div class="row">
          <div class="col-sm"><FontAwesomeIcon icon={faPython} size="2x"/> Python</div>
          <div class="col-sm"><FontAwesomeIcon size="2x"/> Django</div>
          <div class="col-sm"><FontAwesomeIcon icon={faDatabase} size="2x"/> MongoDB</div>
          <div class="col-sm"><FontAwesomeIcon icon={faDatabase} size="2x"/> PostgreSQL</div>
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