import React from 'react'
import { Input } from 'semantic-ui-react'

const InputFieldsMetric = () => (
  <Input
    label={{ basic: true, content: 'kg' }}
    labelPosition='right'
    placeholder='Enter weight...'
    type="text" 
    name="weight" 
    value={this.state.weight} 
    onChange={ (e) => this.setState({ weight: e.target.value })} 
  />
)

export default InputFieldsMetric
