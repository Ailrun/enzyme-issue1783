import React, { Component } from 'react';

export class UseCDUSetState extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidUpdate() {
    this.setState(() => {
      return null;
    });
  }

  render() {
    return null;
  }
}
