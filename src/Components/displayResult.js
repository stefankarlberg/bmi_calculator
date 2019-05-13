import React, { Component } from 'react';
import { bmiCalculation } from '../Modules/BMICalculator';


class DisplayResult extends Component {
  calculate() {
    var weight= this.props.weight;
    var height= this.props.height;
    var weight_stone= this.props.weight_stone;
    var weight_pounds= this.props.weight_pounds;
    var height_feet= this.props.height_feet;
    var height_inches= this.props.height_inches;

    return bmiCalculation(weight, height, weight_stone, weight_pounds, height_feet, height_inches);
  }

  render() {
    return (
      <div id='response'>
        {this.calculate()}
      </div>
    )
  }

}

export default DisplayResult