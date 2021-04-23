import React from "react";
import { connect } from "react-redux";

class Content extends React.Component {
  render() {
    const { stats } = this.props;

    return (
      <>
        <div className="contentSection">
          <h2>Content</h2>
          <div className="ClickCountSection">
            {stats &&
              stats.map((item, index) => {
                return (
                  <>
                    <p key={index}>{item.status}</p>
                  </>
                );
              })}
          </div>
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

export default connect(mapStateToProps)(Content);
