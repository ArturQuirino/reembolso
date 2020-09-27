import React, { Component } from 'react';
import TimeLineItem from './timeLineItem/timeLineItem';
import ApiRepository from '../../../repositories/apiRepository';

class TimeLine extends Component {
  state = { timeLineItens: [] };
  componentDidMount() {
    ApiRepository.getTimeLine().then((res) => {
      const timeLineItens = res.data.content.map((item) => {
        return {
          value: item.amountTotal,
          type: item.cardType,
          observation: item.notes,
          status: item.status,
          date: new Date(item.cardDate),
          currency: item.currencyCode,
        };
      });
      this.setState({
        timeLineItens: timeLineItens,
      });
    });
  }

  render() {
    return (
      <section>
        {this.state.timeLineItens.map((timeLineItem, index) => (
          <TimeLineItem
            timeLineItem={timeLineItem}
            key={timeLineItem.type + index}
          ></TimeLineItem>
        ))}
      </section>
    );
  }
}

export default TimeLine;
