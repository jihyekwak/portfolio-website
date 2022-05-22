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
                    <p className="project-desc-text">Built learning quiz app for young age students, utilizing postgreSQL for database, Django rest framework for backend, React for frontend and Material UI. <br />Adult user can sign up and login with JWT authentication and create student users. User can create, edit, and delete quizzes and questions for personlized learning. </p>
                    <ul class="used-skills right">
                        <li>Django Rest Framework</li>
                        <li>React</li>
                        <li>postgreSQL</li>
                        <li>Material-UI</li>
                    </ul>
                    <div>
                        <ul class="project-link right">
                            <li><a href="https://github.com/jihyekwak/project-5-lovetolearn"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a href="#">demo</a></li>
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
                    <p className="project-desc-text">Built travel planner, utilizing porstgreSQL for database and Django for backend and frontend. <br /> User can login and create travel planner with family and friends, the planner includes itineraries and checklists. And also user can leave comments, so that the users can share their plans and leave all memories.</p>
                    <ul class="used-skills">
                        <li>Django</li>
                        <li>Python</li>
                        <li>postgreSQL</li>
                        <li>Heroku</li>
                    </ul>
                    <div>
                        <ul class="project-link"> 
                            <li><a href="https://github.com/jihyekwak/project-5-lovetolearn"><FontAwesomeIcon icon={faGithub} /></a></li>
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
                    <p className="project-desc-text">Built social media application, utilizing mongoDB for database, Express, Node.js for backend and React for frontend. <br/> The concept of the app is manifestation to the world for personal growth and share the ideas with other users. User can login with Google Oauth and create, edit, and delete posts, comments. And users can get proper advices from API service. </p>
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
                            <li><a href="https://github.com/jihyekwak/project-5-lovetolearn"><FontAwesomeIcon icon={faGithub} /></a></li>
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
                    <p className="project-desc-text">Share post regarding food and leave comment</p>
                    <ul class="used-skills">
                        <li>Node.js</li>
                        <li>JS</li>
                        <li>MongoDB</li>
                        <li>OAuth</li>
                        <li>Heroku</li>
                    </ul>
                    <div>
                        <ul class="project-link">
                            <li><a href="https://github.com/jihyekwak/project-5-lovetolearn"><FontAwesomeIcon icon={faGithub} /></a></li>
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