import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class YourComponent extends Component {
  handleClick = () => {
    this.props.history.push("/portfolio/history");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} type="button">
          Click on me
        </button>
      </div>
    );
  }
}

export default withRouter(YourComponent);
