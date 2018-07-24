import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

class PickupSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Tooltip id="tooltip">
        <p>Picking up your order in the store helps cut costs, and we pass the saving on to you.</p>
      </Tooltip>
    );
  }
}

export default PickupSavings;