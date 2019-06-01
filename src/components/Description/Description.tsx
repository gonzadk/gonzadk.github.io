import './Description.scss';

import React from 'react';

const DELAY = 5;

type DescriptionProps = {};
type DescriptionState = {
  currentPresentation: string
};
class Description extends React.Component<DescriptionProps, DescriptionState> {
  presentation = 'I\'m a 29 years old Sr Frontend Developer from Argentina and currently based in ' +
    'Córdoba. I enjoy working on extensive teams and sharing my knowledge in order to ' +
    'help other people to achieve professional success. I am currently focused on ' +
    'improving my leadership skills and I am also an amateur basketball player.';

  constructor(props: DescriptionProps) {
    super(props);
    this.state = {
      currentPresentation: ''
    };
  }

  componentDidMount() {
    this.autoWrite(this.presentation);
  }

  autoWrite(text: string) {
    if (text.length) {
      setTimeout(() => {
        this.setState({
          currentPresentation: this.state.currentPresentation + text[0]
        });
        const newText = text.slice(1);

        this.autoWrite(newText);
      }, DELAY)
    }
  }

  render() {
    return (
      <div id="description" className="generic-scroll-reveal description-container section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-content">
                  <p>{ this.state.currentPresentation }</p>
                </div>

                <div className="card-action">
                  <div className="description-btn">
                    <a href="../../../assets/pdf/Resume Gonzalo Terzano - English.pdf"
                       target="_blank" className="btn waves-effect">Download Resume</a>
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

export default Description;
