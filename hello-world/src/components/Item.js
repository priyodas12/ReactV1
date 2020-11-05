import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  addItem() {
    this.setState({
      count: this.state.count + 1
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
        <h1>Item:{this.state.count}</h1>
        <button onClick={() => this.addItem()}>Add</button>
      </>
    )
  }
}
