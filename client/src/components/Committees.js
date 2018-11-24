import React from 'react';

const Committees = () => {
  return (
    <div>
      <h2 className="header center z-depth-2 page-banner">Committees</h2>
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
            <div className="card small blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title center">Professional Committee</span>
                <p>
                  Develop your professionalism with the Professional Committee. Together
                  we work on skills that will help you expand your network, land
                  internships, and prepare for full-time jobs.
                </p>
              </div>
            </div>
          </div>
          <div className="col m6 s12">
            <div className="card small blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title center">SHPE Jr. Committee</span>
                <p>
                  Mentor high school students through the SHPE Jr Committee. As mentors we
                  inspire high school students to pursue careers in STEM by hosting fun
                  science experiments. Also, we help the students with college
                  applications and financial aid.
                </p>
              </div>
            </div>
          </div>
          <div className="col m6 s12">
            <div className="card small blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title center">Events Planning Committee</span>
                <p>
                  Create unique socials and fundraisers with the Events Planning
                  Committee. Additionally, the committee exposes members to a
                  collaborative environment where they can exercise communication and
                  leadership skills.
                </p>
              </div>
            </div>
          </div>
          <div className="col m6 s12">
            <div className="card small blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title center">Tech Committee</span>
                <p>
                  Increase your software building skills by joining the TECH Committee. We
                  create tools that help increase SHPE’s ability to recruit and retain
                  members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;
