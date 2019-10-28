import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

export default (props) => {
  return (
    <div className="control-bar">
      <div className="control-bar__search">
        <input type="text" placeholder="Search" className="search" />
        <input id="tags-only" type="checkbox" />
        <label for="tags-only">search in tags only</label>
      </div>
      <button className="vuttr-button btn-add">
        <FontAwesomeIcon icon={faPlus} />
        Add
      </button>
    </div>
  )
}