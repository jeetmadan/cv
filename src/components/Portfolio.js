import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
      <div className="row">
           <div className="three columns">

            <img  src="https://drive.google.com/uc?export=view&id=1fcPvkn_XPV358aJZYCC64BUqhV9XFWAz" alt="" />

          </div>
          <div className="nine columns main-col">

            <h2>TODO- SpringBoot(Feb 2020 - Mar 2020)</h2>
            <p align="justify">
              {
                resumeData.description
              }
            </p>
          </div>
      </div>
        <div className="row">
          <div className="three columns">

            <img  src="https://drive.google.com/uc?export=view&id=1d6HRacI0v0a63qP_XoBeo041RT8rsPzu" alt="" />

          </div>
          <div className="nine columns main-col">

            <h2>Migration - PHP(OYO ROOMS | Mar 2020 - Present)</h2>
            <p align="justify">
              {
                resumeData.description1
              }
            </p>
          </div>
        </div>
        <div className="row">
          <div className="three columns">

            <img  src="https://drive.google.com/uc?export=view&id=15seyuDno63LH6kVFyS3pH8NEarwF3GAk" alt="" />

          </div>
          <div className="nine columns main-col">

            <h2>Supply Chain Channel - PHP(Jan 2020 - Feb 2020)</h2>
            <p align="justify">
              {
                resumeData.description2
              }
            </p>
          </div>
        </div>
        <div className="row">
          <div className="three columns">

            <img  src="https://drive.google.com/uc?export=view&id=1d6HRacI0v0a63qP_XoBeo041RT8rsPzu" alt="" />

          </div>
          <div className="nine columns main-col">

            <h2>Service - PHP(OYO ROOMS | May 2020 - May 2020)</h2>
            <p align="justify">
              {
                resumeData.description3
              }
            </p>
          </div>
        </div>
        <div className="row">
          <div className="three columns">

            <img  src="https://drive.google.com/uc?export=view&id=15gTgpHoPx9CFoqC64KDqwuBsTtmrrZxn" alt="" />

          </div>
          <div className="nine columns main-col">

            <h2>Attendece - ML(NOV 2019 - Dec 2019)</h2>
            <p align="justify">
              {
                resumeData.description4
              }
            </p>
          </div>
        </div>
        <div className="row">
          <div className="three columns">

            <img  src="https://drive.google.com/uc?export=view&id=1KNKimdnK09WHmCbuSLPFQWea9SkTvFR9" alt="" />

          </div>
          <div className="nine columns main-col">

            <h2>Dictionary - Data Structure(April 2017 - May 2017)</h2>
            <p align="justify">
              {
                resumeData.description5
              }
            </p>
          </div>
        </div>
  </section>
        );
  }
}