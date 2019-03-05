import React from 'react';

const ShpeJr = () => {
    return (

        <div>
            <h2 className="header center z-depth-2 page-banner">Shpe Jr</h2> {/* There is a space below this because app.css has .page-banner to have a 1.25em bottom margin spacing*/}

            <div class = "col s12">
                <div className="parallax-container parallax-container-ShpeJr">
                    <div className="parallax">
                        <img
                            src="/group2_unsplash.jpg"
                            alt="/"
                        />
                    </div>
                </div>
            </div>
                <div class="section white">
                    <div class="row container">
                        <h2 class="header">About Shpe Jr</h2>
                        <p>
                            SHPE Junior is our high school outreach branch serving over 20 students on a biweekly schedule at Century High School in Santa Ana, CA.
                        <br /><br />
                            Mentor high school students through the SHPE Jr Committee. As mentors we
    
                        inspire high school students to pursue careers in STEM by hosting fun
                          science experiments. Also, we help the students with college applications and financial aid.</p>
                    </div>
                </div>
            <div class = "col s12">
                <div className="parallax-container parallax-container-ShpeJr">
                    <div className="parallax">
                        <img
                            src="/group_unsplash.jpg"
                            alt="/"
                        />
                    </div>
                </div>
            </div>
                <div class="section white">
                    <div class="row container">
                        <h2 class="header">Contact information</h2>
                        <p>
                            For more information contact __________ (_________@uci.edu)
                    </p>
                    </div>
                </div>

            </div>

            );
        };
        
export default ShpeJr;