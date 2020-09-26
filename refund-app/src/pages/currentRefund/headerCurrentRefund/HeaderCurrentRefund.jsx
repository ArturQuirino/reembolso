import React, { Component } from 'react';
import './HeaderCurrentRefund.css';

class HeaderCurrentRefund extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { headerData } = this.props;
    return (
      <div className="header-current-refund">
        <h1>{headerData.title}</h1>
        <div>
          <span>Nome</span>
          <span>{headerData.name}</span>
          <span>E-mail</span>
          <span>{headerData.email}</span>
          <span>Justificativa</span>
          <span>{headerData.justification}</span>
        </div>
      </div>
    );
  }
}

export default HeaderCurrentRefund;
