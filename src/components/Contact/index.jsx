import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <h3>Contact</h3>
        <h4>Get In Touch</h4>
        <div class="container">
            <div class="row">
                <div class="col-sm contact-detail">
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        github.com/jihyekwak
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                        LinkedIn.com/in/jihye-kwak
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        jihyekwak53@gmail.com
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        925-378-8044
                    </div>
                </div>
                <div class="col-sm">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact