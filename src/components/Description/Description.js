require('./Description.scss');

import React from 'react';

class Description extends React.Component {
  presentation = 'I\'m a 29 years old Sr Frontend Developer from Argentina and currently based in ' +
    'Córdoba. I enjoy working on extensive teams and sharing my knowledge in order to ' +
    'help other people to achieve professional success. I am currently focused on ' +
    'improving my leadership skills and I am also an amateur basketball player.';
  delay = 25;

  componentDidMount() {
    this.autoWrite(this.presentation);
  }

  autoWrite(text) {
    if (text.length) {
      setTimeout(() => {
        this.refs.presentation.innerHTML = this.refs.presentation.innerHTML + text[0];
        const newText = text.slice(1);

        this.autoWrite(newText);
      }, this.delay)
    }
  }

  render() {
    return (
      <div className="description-container section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-content">
                  <p ref='presentation'></p>
                </div>

                <div className="card-action">
                  <div className="description-btn">
                    <a href="assets/pdf/Resume Gonzalo Terzano - English.pdf" target="_blank" className="btn waves-effect">Download Resume</a>
                    <a href="#contact" className="btn waves-effect">Contact Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Description.defaultProps = {
};

export default Description;