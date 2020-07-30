import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from '../containers/City';
import setCities from '../actions';
import cities from '../reducers/Cities';


class CityList extends Component {
  componentDidMount() {
  //  dispatch and action to update the Redux State tree.
    this.props.setCities(cities);
  }
  render() {
    return (
      <div className="col-sm-5">
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
