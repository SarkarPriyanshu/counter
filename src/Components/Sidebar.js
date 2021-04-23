import React from "react";
import { connect } from "react-redux";
import { ClickMeAction } from "../Redux/ActionCreator";

class SideBar extends React.Component {
  // helper function to handle click
  handleClick = () => {
    this.props.ClickMe();
  };

  render() {
    return (
      <>
        <div className="Sidebar">
          <h4>Sidebar</h4>
          <button type="button" className="btn" onClick={this.handleClick}>
            Click here
          </button>
        </div>
      </>
    );
  }
}

// helper function to convert states to props so we can use state as props in the component
const mapStateToProps = (state) => {
  return {
    count: state.ClickMe.count,
    currentTime: state.ClickMe.currentTime,
    stats: state.ClickMe.stats
  };
};

export default connect(mapStateToProps, { ClickMe: ClickMeAction })(SideBar);
