// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onType = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state
    return (
      <div className="container">
        <div>
          <h1>Calculate the Letters you enter</h1>

          <div>
            <label htmlFor="phrase-text">Enter the phrase</label>
            <input
              className="input"
              type="text"
              id="phrase-text"
              size="40"
              height="60px"
              onChange={this.onType}
              placeholder="Enter the phrase"
            />
          </div>
          <p className="letter-count">No.of letters: {inputText.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
