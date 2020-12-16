import './contact.scss';

import React, { FunctionComponent } from 'react';
import { MapContainerWrapper } from 'components/map/map';

export const Contact: FunctionComponent = () => {
  return (
    <section id="contact" className="section contact-container">
      <div className="container">
        <div className="section-title">
          <h4 className="text-uppercase text-center">
            <i className="title-icon fa fa-envelope" />
            Contact
          </h4>
        </div>
        <div className="row">
          <div id="contact-card" className="col-md-5 col-sm-12 col-xs-12">
            <div className="card">
              <div className="card-content">
                <form name="c-form" className="contact-form">
                  <div className="input-field">
                    <input
                      id="first_name"
                      type="text"
                      className="validate"
                      name="first_name"
                      required
                    />
                    <label htmlFor="first_name">Name</label>
                  </div>

                  <div className="input-field">
                    <input id="sub" type="text" className="validate" name="subject" />
                    <label htmlFor="sub">Subject</label>
                  </div>

                  <div className="input-field">
                    <input id="email" type="email" className="validate" name="email" required />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="input-field">
                    <textarea
                      id="textarea1"
                      className="materialize-textarea"
                      name="message"
                      required
                    />
                    <label htmlFor="textarea1">Message</label>
                  </div>

                  <div className="contact-send">
                    <button
                      id="submit"
                      name="contactSubmit"
                      type="submit"
                      value="Submit"
                      className="btn waves-effect"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div id="form-loader" className="progress is-hidden">
                <div className="indeterminate" />
              </div>
            </div>
          </div>

          <div className="col-md-7 col-sm-12 col-xs-12">
            <div id="map-card" className="card">
              <MapContainerWrapper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
