import React, { Component } from 'react';
import logo from '../components/curriculum-vitae.png';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date"> {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date"> {item.YearOfJoining}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>
          <div className="row work">
              <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">
                  {
                      resumeData.skills && resumeData.skills.map((item) => {
                          return(
                              <div className="row item">
                                  <div className="twelve columns">
                                      <span>&bull;</span> <em> {item.skillname}</em>
                                  </div>

                              </div>

                          )
                      })
                  }
              </div>
          </div>
          <div className="row work">
              <div className="three columns header-col">
                  <h1><span>Download CV</span></h1>
              </div>

              <div className="nine columns main-col">
                  {
                      <a href={"https://drive.google.com/file/d/1AtQX3xqco0sIKQiiw0bjCtO8rlM18JOY/preview"}
                         target="_blank">
                          <img src={logo} alt="" width={50} height={50}/>
                      </a>
                  }
              </div>
          </div>

      </section>
    );
  }
}