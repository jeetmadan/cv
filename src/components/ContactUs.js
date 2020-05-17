import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                  It’s hard enough to find an error in your code when you’re looking for it; its even harder when you’ve ASSUMED your code is ERROR-FREE.
              </p>
                <p>
                    - Steve McConnell
                </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
                <h2 style={{color:"white"}}>Contact</h2>
              <div className="widget">
                  <span style={{color:"green"}}>LinkedIn :</span>
                  <span>
                  {resumeData.linkedinId}
                 </span>
              </div>
                <div className="widget">
                    <span style={{color:"green"}} >Gmail :</span>
                    <span>
                        {resumeData.Gmail}
                    </span>
                </div>
                <div className="widget">
                    <span style={{color:"green"}}>Mobile Number :</span>
                    <span>
                        {resumeData.Mobile}
                    </span>
                </div>
            </aside>
          </div>
        </section>
        );
  }
}