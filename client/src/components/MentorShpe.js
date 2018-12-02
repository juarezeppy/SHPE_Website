import React from 'react';

const MentorShpe = () => {
  return (
    <div>
      <h2 className="header center z-depth-2 page-banner">MentorSHPE</h2>
      <div className="container">
        <div className="row">
          <div class="slider">
            <ul class="slides">
              <li>
                <img src="/group2_unsplash.jpg" alt="" />
                <div class="caption center-align">
                </div>
              </li>
              <li>
                <img src="/group_unsplash.jpg" alt="" />
                <div class="caption left-align">
                  <h3>Left Aligned Caption</h3>
                  <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
              </li>
              <li>
                <img src="/mentorshpe/Alondra-Yatziri.jpg" alt="" />
                <div class="caption right-align">
                  <h3>Right Aligned Caption</h3>
                  <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
              </li>
              <li>
                <img src="/mentorshpe/Armando-Manuel.jpg" alt="" />
                <div class="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m7">
            <div class="card">
              <div class="card-image">
                <img src="/group2_unsplash.jpg" alt="" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorShpe;
