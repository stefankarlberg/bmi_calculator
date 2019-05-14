import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import InputFieldsMetric from './Components/InputFieldsMetric';
import { Container, Header, Input, Grid, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      weight_stone: '',
      weight_pounds: '',
      height_feet: '', 
      height_inches: ''
    }
  }

  showImperial() {
    document.getElementById('bmi_metric').style.display = "none";
    document.getElementById('bmi_imperial').style.display = "block";
  }

  showMetric() {
    document.getElementById('bmi_imperial').style.display = "none";
    document.getElementById('bmi_metric').style.display = "block";
  }


  render() {
    return (
      <Container>
  
      <div>
     
  
      <Header as='h1'>BMI Converter</Header>
        <div>
          <h4>
            <span><a class="metric" href="#" onClick={this.showMetric}>Metric</a> </span>&nbsp;&nbsp;|&nbsp;&nbsp;<span><a class ="imperial" onClick={this.showImperial}> Imperial</a> </span>
          </h4>
        </div>
        <div id="bmi_metric">
        <div class="ui right labeled input">
          <input type="text" placeholder="Enter weight..." name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })}  />
          <div class="ui basic label label">kg</div>
        </div>
        <div class="ui right labeled input">
          <input type="text" placeholder="Enter height..." name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })}  />
          <div class="ui basic label label">cm</div>
        </div>


          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
          />
        </div>
        <div id="bmi_imperial" style={{display: 'none'}}>
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
      </div>
      </Container>
    );
  }
}



export default App;
