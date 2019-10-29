import React from 'react';
import './index.scss';

export default (props) => {
  return (
    <ul className="tags">
      {
        props.tags.map(tag => <li key={'tag' + tag}>#{tag}</li>)
      }
    </ul>
  )
}