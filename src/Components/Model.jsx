import React, { Component } from "react";
import { Modal,Button} from "react-bootstrap";

export default class Model extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
         <h3>{this.props.total}</h3>
         <h2>The Transacation is Successful</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}
