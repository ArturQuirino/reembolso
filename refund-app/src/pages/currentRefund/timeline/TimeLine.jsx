import React, { Fragment } from 'react';
import TimeLineItem from './timeLineItem/timeLineItem';
import PropTypes from 'prop-types';

const TimeLine = (props) => {
  const { timeLineItens } = props;
  return (
    <section>
      {timeLineItens.map((timeLineItem) => (
        <TimeLineItem timeLineItem={timeLineItem}></TimeLineItem>
      ))}
    </section>
  );
};

TimeLine.propTypes = {
  timeLineItens: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.number,
      observation: PropTypes.string,
      status: PropTypes.string,
      date: PropTypes.instanceOf(Date),
    })
  ),
};

export default TimeLine;
