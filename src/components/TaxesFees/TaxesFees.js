import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';

class TaxesFees extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est. taxes & fees (Based on 94085)</Col>
        <Col md={6}> {`$${this.props.taxes}`} </Col>
      </Row>
    );
  }
}

export default TaxesFees;