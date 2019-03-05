import React from 'react';

const MentorShpe = () => {
  return (
    <div>
      <h2 className="header center z-depth-2 page-banner">MentorSHPE</h2>
      <div className="container">
        <div className="row">
          <div class="carousel carousel-slider">
            <a class="carousel-item" ><img src="/group2_unsplash.jpg" alt="/" /></a>
            <a class="carousel-item" ><img src="/group_unsplash.jpg" alt="/" /></a>
            <a class="carousel-item" ><img src="/group2_unsplash.jpg" alt="/" /></a>
            <a class="carousel-item" ><img src="/group_unsplash.jpg" alt="/" /></a>
          </div>
        </div>

        <div class="row">
          <div class="col s6 m6">
            <div class="card">
              <div class="card-image">
                <img src="/group2_unsplash.jpg" alt="" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
          <div class="col s6 m6">
            <img class="materialboxed" width="650" src="/group2_unsplash.jpg" alt="/"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorShpe;
