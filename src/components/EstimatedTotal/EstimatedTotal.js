import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

class EstimatedTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Row>
        <Col md={6}><h2>Est. Total</h2></Col>
        <Col md={6}><h2> {`$${this.props.price}`} </h2></Col>
      </Row>
    );
  }
}

export default EstimatedTotal;