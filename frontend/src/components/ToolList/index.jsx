import React, { Component, Fragment } from "react";
import ToolCard from '../ToolCard';

import { connect } from 'react-redux';

class TooList extends Component {

  render() {
    const { tools } = this.props.app;
    return (<Fragment>
        {
          tools.map((tool, index) => { return <ToolCard {...tool} key={index}  /> })
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({ app: state.app });

export default connect(
  mapStateToProps
)(TooList);
