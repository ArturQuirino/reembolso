import React, { Component, Fragment } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import HeaderCurrentRefund from './headerCurrentRefund/HeaderCurrentRefund';

import './CurrentRefund.css';
import TimeLine from './timeline/TimeLine';

class CurrentRefundPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  breadcrumb = [
    { label: 'Dashboard', url: '#' },
    { label: 'QuickOps', url: '#' },
    { label: 'Current', url: '#' },
  ];

  headerData = {
    title: 'Reembolso #762',
    name: 'Backoffice Team',
    email: 'backoffice@hotmart.com',
    justification: '1212',
  };

  timeLineItens = [
    {
      value: 1,
      type: 'Pagamento Realizado',
      observation: 'Despositado no dia x',
      status: 'Aprovado',
      date: new Date(1, 1, 1),
    },
    {
      value: 1,
      type: 'Pagamento Realizado',
      observation: 'Despositado no dia x',
      status: 'Aprovado',
      date: new Date(1, 1, 1),
    },
  ];

  render() {
    return (
      <div className="currentRefund">
        <header className="currentRefund__header">
          <Breadcrumbs links={this.breadcrumb} />
          <HeaderCurrentRefund headerData={this.headerData} />
        </header>
        <TimeLine timeLineItens={this.timeLineItens} />
      </div>
    );
  }
}

export default CurrentRefundPage;
