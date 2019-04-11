import React from "react"
import { connect } from "react-redux"

import { getToken } from "../actions/tokensActions"

@connect((store) => {
  return {
    token: "1234"
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(getToken())
  }

  fetchTweets() {
    this.props.dispatch(getToken())
  }

  render() {
    const { token } = this.props;

    if (!token.length) {
      return <button onClick={this.getToken.bind(this)}>load token</button>
    }

    return <div>
      <h1> hi </h1>
      {/* <h1>{token}</h1> */}
    </div>
  }
}
