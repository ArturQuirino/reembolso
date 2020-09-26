import React from 'react';
import Card from '../../../../components/card/Card';
import './timeLineItem.css';
import PropTypes from 'prop-types';

const TimeLineItem = (props) => {
  const { timeLineItem } = props;
  return (
    <Card className="timeline-item">
      <div className="timeline-item__container-valor">
        <div className="timeline-item__container-valor__label">icone</div>
        <span>{timeLineItem.date.toLocaleDateString()}</span>
      </div>
      <div className="timeline-item__container-valor">
        <span className="timeline-item__container-valor__label">Tipo</span>
        <span>{timeLineItem.type}</span>
      </div>
      <div className="timeline-item__container-valor">
        <span className="timeline-item__container-valor__label">Valor</span>
        <span>{timeLineItem.value}</span>
      </div>
      <div className="timeline-item__container-valor">
        <span className="timeline-item__container-valor__label">
          Observação
        </span>
        <span>{timeLineItem.observation}</span>
      </div>
      <div className="timeline-item__container-valor">
        <span className="timeline-item__container-valor__label">Status</span>
        <span>{timeLineItem.status}</span>
      </div>
    </Card>
  );
};

TimeLineItem.propTypes = {
  timeLineItem: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.number,
    observation: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.instanceOf(Date),
  }),
};

export default TimeLineItem;
