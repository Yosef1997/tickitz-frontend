// import React, { Component } from 'react'
// import './DropDown.css'
// import Calender from '../../assets/calender-icon.png'
// import Select from 'react-select'

// export default class index extends Component {
//   state={
//     date: [
//       { value: '1', label: '2021-04-21' },
//       { value: '2', label: '2021-04-22' }
//     ],
//     idDate: ''
//   }
//   chooseDate = idDate => {
//     this.setState({ idDate })
//     console.log('date', this.state.idDate)
//   }

//   render () {
//     return (
//       <div className='dropDown'>
//         <img src={Calender} />
//         <Select className='dropDownInput' placeholder={this.props.placeholder} options={this.state.date} onChange={this.chooseDate} value={this.state.idDate} />
//       </div>
//     )
//   }
// }

import React from 'react'
import Select from 'react-select'
import Calender from '../../assets/calender-icon.png'
import './DropDown.css'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

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
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      </div>
    )
  }
}

export default index
