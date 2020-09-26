import React, { Component, Fragment } from 'react';
import BreadCrumb from '../../components/breadcrumbs/Breadcrumbs';
import HeaderCurrentRefund from './header/Header';

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
      <Fragment>
        <header>
          <BreadCrumb links={this.breadcrumb} />
          <HeaderCurrentRefund headerData={this.headerData} />{' '}
        </header>
      </Fragment>
    );
  }
}

export default CurrentRefundPage;
