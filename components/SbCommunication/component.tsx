import { Component } from "react";
import { subscribe, unsubscribe } from "../../lib/events";

const gameStart = () => {
  alert("Game started!")
}

class SbCommunication extends Component {

  componentDidMount() {
    subscribe('game:start', gameStart)
    subscribe('game:objectFound', gameStart)
  }

  componentWillUnmount() {
    unsubscribe('game:start', gameStart)
  }

  render() { return null }
}

export default SbCommunication;
