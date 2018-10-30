import React, { Component } from 'react';


class WeatherContainer extends Component {
  render(){
    return (
          <h4> Hi {this.props.username}</h4>
      )
  }
}

export default WeatherContainer;