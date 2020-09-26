import React, { Component } from 'react';
import Card from '../../../components/card/Card';
import './HeaderCurrentRefund.css';

class HeaderCurrentRefund extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { headerData } = this.props;
    return (
      <Card className="header-current-refund">
        <h1 className="header-current-refund__header">{headerData.title}</h1>
        <div className="header-current-refund__properties">
          <span className="header-current-refund__properties__label">Nome</span>
          <span>{headerData.name}</span>
          <span className="header-current-refund__properties__label">
            E-mail
          </span>
          <span>{headerData.email}</span>
          <span className="header-current-refund__properties__label">
            Justificativa
          </span>
          <span>{headerData.justification}</span>
        </div>
        <div className="header-current-refund__analist">
          <div className="header-current-refund__analist-cost-center__analist">
            <label htmlFor="analist">Atribuir analista</label>
            <select name="analist" name="analist">
              <option>A</option>
              <option>b</option>
              <option>c</option>
              <option>d</option>
            </select>
          </div>
          <div className="header-current-refund__analist-cost-center__cost-center">
            <span>Centro de Custo</span>
            <span>100% - Approval CC Test</span>
          </div>
        </div>
      </Card>
    );
  }
}

export default HeaderCurrentRefund;
