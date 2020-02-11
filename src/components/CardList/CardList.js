import React, { Component } from "react";

import Card from "../Card/Card";

import "./cardlist.scss";

import { data } from "../../util/data";

export default class CardList extends Component {
  state = {
    cards: data
  };

  render() {
    return (
      <section className="cardlist">
        {this.state.cards.map((card, index) => (
          <Card key={index} header={card.header} text={card.text}>
            {card.options}
          </Card>
        ))}
      </section>
    );
  }
}
