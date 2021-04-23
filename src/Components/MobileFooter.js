import React from "react";
import { connect } from "react-redux";

class MobileFooter extends React.Component {
  render() {
    let { count } = this.props;
    return (
      <>
        <footer className="MobileFooter">
          <h2>{`You clicked ${count}`}</h2>
        </footer>
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

export default connect(mapStateToProps)(MobileFooter);
