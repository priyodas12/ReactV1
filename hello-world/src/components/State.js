import React, { Component } from 'react'

export default class State extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "priyo"
    }

    this.handleEvent = this.handleEvent.bind(this)
  }
  changeMessage() {
    this.setState({
      name: "priya"
    })
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  componentWillUnmount() {

  }

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() { }

  // Class Properties (Stage 3 Proposal)
  handler = () => { this.setState() }

  render() {
    return (
      <>
        <h1>state component returning name: {this.state.name}</h1>
        <button onClick={() => this.changeMessage()}> change content</button>
      </>
    )
  }
}
