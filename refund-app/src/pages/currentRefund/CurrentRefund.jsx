import React, { Component, Fragment } from 'react';
import BreadCrumb from '../../components/breadcrumbs/Breadcrumbs';
import HeaderCurrentRefund from './headerCurrentRefund/HeaderCurrentRefund';

import './CurrentRefund.css';

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

  render() {
    return (
      <div className="currentRefund">
        <header className="currentRefund__header">
          <BreadCrumb links={this.breadcrumb} />
          <HeaderCurrentRefund headerData={this.headerData} />
        </header>
      </div>
    );
  }
}

export default CurrentRefundPage;
