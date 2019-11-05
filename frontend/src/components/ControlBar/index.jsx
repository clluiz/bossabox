import React, { Component } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { searchInAllFields, searchInTagsOnly, toggleAddModal  } from '../../app.actions';
import './index.scss';

import AddTool from '../AddTool';

class ControlBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsOnly   : false
    }
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onToggleTagsOnly = this.onToggleTagsOnly.bind(this);
    this.addTool = this.addTool.bind(this);
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

  addTool() {
    this.props.toggleAddModal(true);
  }

  render() {
    const { tagsOnly } = this.state;
    const { showingAddModal } = this.props.app;
    return (
      <div className="control-bar">
        <div className="control-bar__search">
          <label className="group">
            <input type="text" placeholder="Search" className="search" onChange={this.onChangeSearch} />
          </label>
          <input id="tags-only" type="checkbox" checked={tagsOnly} onChange={this.onToggleTagsOnly} />
          <label htmlFor="tags-only">search in tags only</label>
        </div>
        <button className="vuttr-button btn-add" onClick={this.addTool}>
          <FontAwesomeIcon icon={faPlus} />
          Add
        </button>
        <AddTool show={showingAddModal} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ app: state.app });
const mapDispatchToProps = dispatch => bindActionCreators({ searchInAllFields, searchInTagsOnly, toggleAddModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);