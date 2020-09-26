import React from 'react';
import TimeLineItem from './timeLineItem/timeLineItem';
import PropTypes from 'prop-types';

const TimeLine = (props) => {
  const { timeLineItens } = props;
  return (
    <section>
      {timeLineItens.map((timeLineItem, index) => (
        <TimeLineItem
          timeLineItem={timeLineItem}
          key={timeLineItem.type + index}
        ></TimeLineItem>
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
