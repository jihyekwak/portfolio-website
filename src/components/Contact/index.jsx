import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="component contact" id="contact">
        <h3>Contact</h3>
        {/* <h4>Get In Touch</h4> */}
        <div class="row">
            <div class="col-sm contact-detail">
                <div>
                    <a href="https://github.com/jihyekwak">
                        <FontAwesomeIcon icon={faGithub} />
                        {/* github.com/jihyekwak */}
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/jihye-kwak/">
                        <FontAwesomeIcon icon={faLinkedin} />
                        {/* LinkedIn.com/in/jihye-kwak */}
                    </a>
                </div>
                <div>
                    <a href="mailto:jihyekwak53@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                        {/* jihyekwak53@gmail.com */}
                    </a>
                </div>
                {/* <div>
                    <a>
                        <FontAwesomeIcon icon={faPhone} />
                        925-378-8044
                    </a>
                </div> */}
            </div>
            {/* <div class="col-sm">
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Contact