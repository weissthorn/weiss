import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';

export default class FormHtmlEditor extends Component {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill');
    }
  }

  render() {
    const ReactQuill = this.ReactQuill;
    if (typeof window !== 'undefined' && ReactQuill) {
      return <ReactQuill onChange={this.props.onChange} theme="snow" value={this.props.value} />;
    } else {
      return null;
    }
  }
}
