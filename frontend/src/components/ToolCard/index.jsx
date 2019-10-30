import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Tags from '../Tags';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeTool } from '../../app.actions';

class ToolCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRemove : false
    }
    this.removeTool = this.removeTool.bind(this);
    this.cancelRemove = this.cancelRemove.bind(this);
    this.confirmRemove = this.confirmRemove.bind(this);
  }

  removeTool() {
    this.setState({
      showRemove : true
    })
  };

  cancelRemove() {
    this.setState({
      showRemove : false
    });
  };

  confirmRemove() {
    this.props.removeTool(this.props._id);
  }
  
  render() {
    const { link, title, description, tags } = this.props;
    return (
      <div className="tool-card">
        <header>
          <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
          <button className="vuttr-button btn-remove" onClick={this.removeTool}>
            <FontAwesomeIcon icon={faWindowClose} />
            remove
          </button>
        </header>
        <p>
          {description}
        </p>
        <Tags tags={tags} />
        <Modal show={this.state.showRemove}>
          <Modal.Header closeButton>
            <Modal.Title>
              <FontAwesomeIcon icon={faWindowClose} />
              Remove tool
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to remove tool?</Modal.Body>
          <Modal.Footer>
            <button className="vuttr-button btn-cancel" onClick={this.cancelRemove}>
              Cancel
            </button>
            <button className="vuttr-button btn-add" onClick={this.confirmRemove}>
              Yes, remove
            </button>
          </Modal.Footer>
      </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ removeTool }, dispatch);

export default connect(null, mapDispatchToProps)(ToolCard);