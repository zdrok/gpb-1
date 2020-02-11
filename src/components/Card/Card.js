import React, { Component } from "react";

import Option from "../Option/Option";

import "./card.scss";

export default class Card extends Component {
  state = {
    showText: true
  };

  handleText = () => {
    this.setState({ showText: !this.state.showText });
  };

  render() {
    const { header, text, children } = this.props;

    return (
      <article className="card">
        <h3>{header}</h3>
        <h4>
          <ul>
            {children.map((child, index) => (
              <Option key={index} text={child} />
            ))}
          </ul>
        </h4>

        <h5>
          Details:
          <span onClick={this.handleText}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>
        {this.state.showText && <p>{text}</p>}
      </article>
    );
  }
}
