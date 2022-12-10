// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isCondition1: false, isCondition2: false}

  onFirstName = () => {
    const {isCondition1} = this.state
    this.setState(() => ({
      isCondition1: !isCondition1,
    }))
  }

  onLastName = () => {
    const {isCondition2} = this.state
    this.setState(() => ({
      isCondition2: !isCondition2,
    }))
  }

  render() {
    const {isCondition1, isCondition2} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="sub-card">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {isCondition1 ? <p className="name-card"> Joe</p> : ''}
          </div>
          <div className="sub-container">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {isCondition2 ? <p className="name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
