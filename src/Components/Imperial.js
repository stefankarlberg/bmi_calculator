import React, { Component } from 'react';
import { bmiCalculation } from '../Modules/BMICalculator';

<div id="bmi_imperial">
<div>
  <label>Weight(stone)</label>
  <input name="weight_stone" value={this.state.weight_stone} onChange={ (e) => this.setState({ weight_stone: e.target.value })} />
</div>
<div>
  <label>Weight(pounds)</label>
  <input name="weight_pounds" value={this.state.weight_pounds} onChange={ (e) => this.setState({ weight_pounds: e.target.value })} />
</div>
<div>
  <label>Height(feet)</label>
  <input name="height_feet" value={this.state.height_feet} onChange={ (e) => this.setState({ height_feet: e.target.value })} />
</div>
<div>
  <label>Height(inches)</label>
  <input name="height_inches" value={this.state.height_inches} onChange={ (e) => this.setState({ height_inches: e.target.value })} />
</div>
<DisplayResult
  weight_stone={this.state.weight_stone}
  weight_pounds={this.state.weight_pounds}
  height_feet={this.state.height_feet}
  height_inches={this.state.height_inches}
/>
</div>