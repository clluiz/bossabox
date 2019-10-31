import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createTool, toggleAddModal } from "../../app.actions";
import { Modal } from 'react-bootstrap';
import { Field, ErrorMessage, withFormik } from 'formik';
import schema from './schema';
import BootstrapErrorMessage from '../BootstrapErrorMessage';

import './index.scss';

class AddTool extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }
  onClose() {
    this.props.resetForm({
      title       : '',
      description : '',
      tags        : '',
      link        : ''
    });
    this.props.toggleAddModal(false);
  }

  render() {
    const {
      values,
      handleSubmit,
      handleChange,
      errors,
      touched,
      show
    } = this.props;
    return (
      <Modal show={show} onHide={this.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new tool</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form" noValidate>
            <label>Tool name: *</label>
            <Field
              type="text"
              name="title"
              required
              placeholder="Tool"
              onChange={handleChange}
              values={values.title}
              className={
                errors.title && touched.title ? 'form-control is-invalid' : 'form-control'
              }
            />
            <ErrorMessage name="title" component={BootstrapErrorMessage} />            
            <label>Tool link: *</label>
            <Field
              type="text"
              name="link"
              required
              placeholder="Link for tool website"
              className={
                errors.link && touched.link ? 'form-control is-invalid' : 'form-control'
              }
            />
            <ErrorMessage name="link" component={BootstrapErrorMessage} />
            <label>Tool description: *</label>
            <Field
              component="textarea"
              name="description"
              required
              placeholder="Write a short description"
              values={values.description}
              className={
                errors.description && touched.description ? 'form-control is-invalid' : 'form-control'
              }
            />
            <ErrorMessage name="description" component={BootstrapErrorMessage} />
            <label>Tags:</label>
            <Field
              component="textarea"
              name="tags"
              required
              placeholder="Write a list of space separated tags"
              values={values.tags}
              className={
                errors.tags && touched.tags ? 'form-control is-invalid' : 'form-control'
              }
            />
            <ErrorMessage name="tags" component={BootstrapErrorMessage} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="vuttr-button btn-add" onClick={handleSubmit}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const EnhancedComponent = withFormik({
  isInitialValid: false,
  mapPropsToValues: () => ({
    title       : '',
    link        : '',
    description : '',
    tags        : ''
  }),
  validationSchema: schema,
  handleSubmit: (values, { props }) => {
    props.createTool(values);
  },
  enableReinitialize: true,
})(AddTool);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createTool, toggleAddModal }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(EnhancedComponent);
