import React, { Component } from 'react';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  render() {
    return (
      <div className="col-sm-7">
        <h1>{this.props.city.name}</h1>
        <p>{this.props.city.address}</p>
         <img src={"https://kitt.lewagon.com/placeholder/cities/paris"} className="image"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);

