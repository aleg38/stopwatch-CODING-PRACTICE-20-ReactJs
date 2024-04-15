// Write your code here

import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {isTimerRun: false, count: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onClickResetBtn = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRun: false, count: 0})
  }

  onClickStopBtn = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRun: false})
  }

  onClickStartBtn = () => {
    this.timerId = setInterval(this.timeRun, 1000)
    this.setState({isTimerRun: true})
  }

  timeRun = () => {
    this.setState(prevCount => ({count: prevCount.count + 1}))
  }

  onTimerSeconds = () => {
    const {count} = this.state
    const seconds = Math.floor(count % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onTimerMinutes = () => {
    const {count} = this.state
    const minutes = Math.floor(count / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRun} = this.state

    const timer = `${this.onTimerMinutes()}:${this.onTimerSeconds()}`

    return (
      <div className="app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="timer-card-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-image"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <h1 className="timer">{timer}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button green"
              onClick={this.onClickStartBtn}
              disabled={isTimerRun}
            >
              Start
            </button>

            <button
              type="button"
              className="button red"
              onClick={this.onClickStopBtn}
            >
              Stop
            </button>

            <button
              type="button"
              className="button yellow"
              onClick={this.onClickResetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
