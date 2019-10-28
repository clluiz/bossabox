import React, { Component } from 'react';
import Tags from '../Tags';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss';

export default class ToolCard extends Component {
  render() {
    const { link, title, description, tags } = this.props;
    return (
      <div className="tool-card">
        <header>
          <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
          <button className="vuttr-button btn-remove">
            <FontAwesomeIcon icon={faWindowClose} />
            remove
          </button>
        </header>
        <p>
          {description}
        </p>
        <Tags tags={tags} />
      </div>
    )
  }
}