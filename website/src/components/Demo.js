/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";
import {PrismCode} from "react-prism";


export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {codeVisible: false};
  }

  onSourceClick = (event) => {
    event.preventDefault();
    this.setState({codeVisible: !this.state.codeVisible});
  }

  render() {
    return (
      <section className="code-sample">
        <div className="code-sample__head">
          <div className="code-sample__title">{this.props.title}</div>
          <div className="code-sample__buttons">
            <a href="#" className="code-sample__button" onClick={this.onSourceClick}>HTML</a>
          </div>
        </div>
        <div className={`code-sample__snippet ${this.state.codeVisible? "code-sample__snippet--active": ""}`}>
          <pre>
            <PrismCode className="language-html">{this.props.code}</PrismCode>
          </pre>
        </div>
        <div style={this.props.style} className="code-sample__content">
          {this.props.children? <div className="code-sample__description">{this.props.children}</div>: null}
          <div className="code-sample__render" dangerouslySetInnerHTML={{__html:this.props.code}}/>
        </div>
      </section>
    );
  }
}
