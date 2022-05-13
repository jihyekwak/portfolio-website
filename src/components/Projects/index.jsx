import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <div className="projects" id="projects">
        <h3>Projects</h3>
        <div class="container project">
            <div class="row">
                <div class="col-sm">
                    p1 Screenshot
                </div>
                <div class="col-sm description right">
                    <h4><strong>Love to Learn</strong></h4>
                    <p className="project-desc-text">Personalized learning app for kids. User can make their children user and create customized quizzes.</p>
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
        <div class="container project">
            <div class="row">
                <div class="col-sm description">
                    <h4><strong>Travel Lovers</strong></h4>
                    <p className="project-desc-text">Plan travel with family and friends, and share the memories</p>
                    <ul class="used-skills">
                        <li>Django</li>
                        <li>Python</li>
                        <li>postgreSQL</li>
                        <li>Heroku</li>
                    </ul>
                    <div>
                        <ul class="project-link"> 
                            <li><a href="https://github.com/jihyekwak/project-5-lovetolearn"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a href="#">demo</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm">
                p2 Screenshot
                </div>
            </div>
        </div>
        <div class="container project">
            <div class="row">
                <div class="col-sm">
                p3 Screenshot
                </div>
                <div class="col-sm description right">
                    <h4><strong>Sapling</strong></h4>
                    <p className="project-desc-text">Manifestation App</p>
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
                            <li><a href="#">demo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container project">
            <div class="row">
                <div class="col-sm description">
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
                            <li><a href="#">demo</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm">
                p1 Screenshot
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects