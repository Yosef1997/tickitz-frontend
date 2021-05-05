import React from 'react'
import Select from 'react-select'
import Location from '../../assets/location.png'
import './DropDown.css'

class index extends React.Component {
  state = {
    options: [
      { value: '1', label: 'Jakarta Utara' },
      { value: '2', label: 'Jakarta Pusat' }
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
        <img src={Location} />
      <Select
        className='dropDownInput'
        placeholder='Set a city'
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      </div>
    )
  }
}

export default index
