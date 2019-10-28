import React from 'react';
import './index.scss';

export default (props) => {
  return (
    <ul className="tags">
      {
        props.tags.map(tag => <li>#{tag}</li>)
      }
    </ul>
  )
}