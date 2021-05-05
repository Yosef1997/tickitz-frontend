import React from 'react'
import Select from 'react-select'
import Calender from '../../assets/calender-icon.png'
import './DropDown.css'

class index extends React.Component {
  state = {
    options: [
      { value: '1', label: '2021-04-21' },
      { value: '2', label: '2021-04-22' }
    ],
    selectedOption: ''
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption })
    console.log('Option selected:', selectedOption.value)
  };
  render () {
    const { selectedOption, options } = this.state

    return (
      <div className='dropDown'>
        <img src={Calender} />
      <Select
        className='dropDownInput'
        placeholder='Set a date'
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      </div>
    )
  }
}

export default index
