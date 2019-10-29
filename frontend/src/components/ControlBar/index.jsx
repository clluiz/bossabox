import React, { Component } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { searchInAllFields, searchInTagsOnly  } from '../../app.actions';
import './index.scss';

class ControlBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tagsOnly : false
    }
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onToggleTagsOnly = this.onToggleTagsOnly.bind(this);
  }

  componentDidMount() {
    this.props.searchInAllFields();
  }

  onChangeSearch(e) {
    const search = e.target.value;
    if(!search) {
      this.props.searchInAllFields();
    } else if(search.length >= 3) {
      if(this.state.tagsOnly) {
        this.props.searchInTagsOnly(search);
      } else {
        this.props.searchInAllFields(search);
      }
    }
  }

  onToggleTagsOnly(e) {
    const checked = e.target.checked;
    this.setState({
      tagsOnly : checked
    });
  }

  render() {
    return (
      <div className="control-bar">
        <div className="control-bar__search">
          <label className="group">
            <input type="text" placeholder="Search" className="search" onChange={this.onChangeSearch} />
          </label>
          <input id="tags-only" type="checkbox" checked={this.state.tagsOnly} onChange={this.onToggleTagsOnly} />
          <label htmlFor="tags-only">search in tags only</label>
        </div>
        <button className="vuttr-button btn-add">
          <FontAwesomeIcon icon={faPlus} />
          Add
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ searchInAllFields, searchInTagsOnly }, dispatch);

export default connect(null, mapDispatchToProps)(ControlBar);