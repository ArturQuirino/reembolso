import React, { Component } from 'react';
import Card from '../../../../components/card/Card';
import './timeLineItem.css';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyCheckAlt,
  faAsterisk,
  faConciergeBell,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons';

class TimeLineItem extends Component {
  getIconBasedOnStatus = () => {
    switch (this.props.timeLineItem.type) {
      case 'EVALUATION':
        return (
          <div
            className="timeline-item__container-valor__icon"
            style={{ backgroundColor: '#edfff5' }}
          >
            <FontAwesomeIcon
              icon={faMoneyCheckAlt}
              style={{ color: 'green' }}
            />
          </div>
        );
      case 'ACCOUNTABILITY_SUBMITTED':
      case 'ACCOUNTABILITY_CREATED':
        return (
          <div
            className="timeline-item__container-valor__icon"
            style={{ backgroundColor: '#f0f3f7' }}
          >
            <FontAwesomeIcon icon={faAsterisk} style={{ color: 'purple' }} />
          </div>
        );
      case 'EXPENSE':
        return (
          <div
            className="timeline-item__container-valor__icon"
            style={{ backgroundColor: '#e7f2fd' }}
          >
            <FontAwesomeIcon icon={faConciergeBell} style={{ color: 'blue' }} />
          </div>
        );
      default:
        return (
          <div
            className="timeline-item__container-valor__icon"
            style={{ backgroundColor: '#edfff5' }}
          >
            <FontAwesomeIcon icon={faAlignJustify} style={{ color: 'gray' }} />
          </div>
        );
    }
  };

  getStyleStatus = () => {
    switch (this.props.timeLineItem.status) {
      case 'PENDING':
        return {
          backgroundColor: '#FFFEAA',
          color: '#A7A900',
          borderColor: '#A7A900',
        };
      case 'APPROVED':
        return {
          backgroundColor: '#e6fff0',
          color: '#03a046',
          borderColor: '#03a046',
        };
      case 'Rejected':
        return {
          backgroundColor: '#FFAAAA',
          color: 'red',
          borderColor: 'red',
        };
      default:
        return {
          backgroundColor: 'gray',
          color: 'black',
          borderColor: 'black',
        };
    }
  };

  render() {
    const { timeLineItem } = this.props;
    return (
      <Card className="timeline-item">
        <div className="timeline-item__container-valor">
          {this.getIconBasedOnStatus()}
          <span className="timeline-item__container-valor__date">
            {timeLineItem.date.toLocaleDateString()}
          </span>
        </div>
        <div className="timeline-item__container-valor">
          <span className="timeline-item__container-valor__label">Tipo</span>
          <span className="timeline-item__container-valor__type">
            {timeLineItem.type}
          </span>
        </div>
        {timeLineItem.value && (
          <div className="timeline-item__container-valor">
            <span className="timeline-item__container-valor__label">Valor</span>
            <span className="timeline-item__container-valor__value">
              {timeLineItem.value}
            </span>
          </div>
        )}
        {timeLineItem.observation && (
          <div className="timeline-item__container-valor">
            <span className="timeline-item__container-valor__label">
              Observação
            </span>
            <span className="timeline-item__container-valor__obs">
              {timeLineItem.observation}
            </span>
          </div>
        )}
        {timeLineItem.status && (
          <div className="timeline-item__container-valor">
            <span className="timeline-item__container-valor__label">
              Status
            </span>
            <div
              className="timeline-item__container-valor__status"
              style={this.getStyleStatus()}
            >
              {timeLineItem.status}
            </div>
          </div>
        )}
      </Card>
    );
  }
}

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
