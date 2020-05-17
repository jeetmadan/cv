import React, { Component } from 'react';
// import logo from '../components/circle-cropped.png';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img style={{height:'150px',width:'150px'}}  src="https://drive.google.com/uc?export=view&id=10cQdq8reSyrJ2GbjvHjEuUdgN3H2dltw" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p align="justify">
               {
                 resumeData.aboutme
               }
               </p>
            </div>
         </div>
      </section>
    );
  }
}