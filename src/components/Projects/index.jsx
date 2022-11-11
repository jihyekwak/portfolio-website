import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <div className="component projects" id="projects">
        <h3>Relavant Experience</h3>
        <div class="project-item">
            <div class="row">
                <div class="col-sm screenshot lovetolearn">
                </div>
                <div class="col-sm description right">
                    <h6>Project</h6>
                    <h4><strong>Love to Learn</strong></h4>
                    <p className="project-desc-text">Built learning quiz platform for young age students, utilizing postgreSQL for database, Django rest framework for backend, and React for frontend and Material UI. <br />Users can sign up and login with JWT authentication and create individual student user accounts. Users can create, edit, and delete quiz sets for individual or group learning. </p>
                    <ul class="used-skills right">
                        <li>Django Rest Framework</li>
                        <li>React</li>
                        <li>postgreSQL</li>
                        <li>Material-UI</li>
                    </ul>
                    <div>
                        <ul class="project-link right">
                            <li><a href="https://github.com/jihyekwak/project-5-lovetolearn"><FontAwesomeIcon icon={faGithub} /></a></li>
                            {/* <li><a href="#">demo</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container project-item">
            <div class="row">
                <div class="col-sm description">
                    <h6>Project</h6>
                    <h4><strong>Travel Lovers</strong></h4>
                    <p className="project-desc-text">Built travel applications which primary feature includes information gathering and planning for a trip; utilizing porstgreSQL for database and Django for both backend and frontend. <br />Users can login and create travel plans with families and friends. the planner can include an information bulletin, gerenating itineraries, and building checklists. In addition, users can leave comments so that they can share their plans with each other and be able to look back to their memories.</p>
                    <ul class="used-skills">
                        <li>Django</li>
                        <li>Python</li>
                        <li>postgreSQL</li>
                        <li>Heroku</li>
                    </ul>
                    <div>
                        <ul class="project-link"> 
                            <li><a href="https://github.com/jihyekwak/project-4-travellovers"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a href="https://travellovers.herokuapp.com/">demo</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm screenshot travellovers">
                </div>
            </div>
        </div>
        <div class="container project-item">
            <div class="row">
                <div class="col-sm screenshot sapling">
                </div>
                <div class="col-sm description right">
                    <h6>Project</h6>
                    <h4><strong>Sapling</strong></h4>
                    <p className="project-desc-text">Built social media application, utilizing mongoDB for database, Express and Node.js for backend, and React for frontend. <br/>The concept of the app is to express an indivduals personal growth journey and share their ideas with other users. Users can login with Google Oauth to create, edit, and delete posts, comments. Moreover, users can get proper advices from API services.</p>
                    <ul class="used-skills right">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>JS</li>
                        <li>MongoDB</li>
                        <li>MERN stack</li>
                        <li>OAuth</li>
                        <li>Heroku</li>
                    </ul>
                    <div>
                        <ul class="project-link right">
                            <li><a href="https://github.com/mbahan1/project-3-sapling"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a href="https://sapling-1026.herokuapp.com/">demo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container project-item">
            <div class="row">
                <div class="col-sm description">
                    <h6>Project</h6>
                    <h4><strong>Foodgram</strong></h4>
                    <p className="project-desc-text">Built an end-to-end web application, utilizing mongoDB for database, and Express and Node.js for backend and frontend. <br/>This is a social media application concentrating in food. Users can login with Google Oauth to create, edit, and delete. They can leave posts, tags, and comments with images for themselves and other users.</p>
                    <ul class="used-skills">
                        <li>Node.js</li>
                        <li>JS</li>
                        <li>MongoDB</li>
                        <li>OAuth</li>
                        <li>Heroku</li>
                    </ul>
                    <div>
                        <ul class="project-link">
                            <li><a href="https://github.com/preteyz/Project-2-web-app"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a href="https://project2-foodgram.herokuapp.com/">demo</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm screenshot foodgram">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects