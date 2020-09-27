import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import HeaderCurrentRefund from './headerCurrentRefund/HeaderCurrentRefund';

import './CurrentRefundPage.css';
import TimeLine from './timeline/TimeLine';
import SideBar from './sideBar/SideBar';
import AddExpense from './addExpense/AddExpense';

class CurrentRefundPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLineItens: [],
    };
  }

  breadcrumb = [
    { label: 'Dashboard', url: '#' },
    { label: 'QuickOps', url: '#' },
    { label: 'Current', url: '#' },
  ];

  render() {
    return (
      <div className="currentRefund">
        <header className="currentRefund__header">
          <Breadcrumbs links={this.breadcrumb} />
          <HeaderCurrentRefund />
        </header>
        <div>
          <AddExpense />
          <TimeLine />
        </div>

        <SideBar className="currentRefund__side-bar" />
      </div>
    );
  }
}

export default CurrentRefundPage;
