import React from 'react'
import { Container, Header, Input, Grid, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class InputFieldsMetric extends React.Component {
  render() { 
  
    return <div>

        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>;

</div>


    // return <div>
    //             <div id="bmi_metric">
    //                 <div class="ui right input">
    //                   <input type="text" placeholder="Enter weight..." name="weight" value={this.props.weight} onChange={ (e) => this.setState({ weight: e.target.value })}  />
    //               </div>
    //              </div>
    //         </div> ;    
  }
}

export default InputFieldsMetric
