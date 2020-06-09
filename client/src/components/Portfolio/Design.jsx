import React, { Component } from "react";
import "./Design.scss";

export default class Design extends Component {
  render() {
    return (
      <section className="design section-padding">
        <div id="container-design">
          <div className="grid-design">
            <div className="box-design">
              <div className="block-img">
                <img
                  src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Starlax-Pitch-Deck-Powerpoint-Presentation-by-TMint-580x387.jpg"
                  alt="Amazing Design"
                />
              </div>
              <div className="block-content-txt">
                <h6 className="id">01</h6>
                <h4 className="creation-name center">Starlax</h4>
                <p className="creation-list center">Template</p>
                <p className="creation-infos center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                  itaque vero
                </p>
                <a href="#" className="link-read-more">
                  Read more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
