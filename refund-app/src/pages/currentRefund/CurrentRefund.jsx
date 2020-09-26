import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import HeaderCurrentRefund from './headerCurrentRefund/HeaderCurrentRefund';

import './CurrentRefund.css';
import TimeLine from './timeline/TimeLine';
import ApiRepository from '../../repositories/apiRepository';
import SideBar from './sideBar/SideBar';

class CurrentRefundPage extends Component {
  constructor(props) {
    super(props);
    this.state = { headerData: {}, timeLineItens: [] };
  }

  componentDidMount() {
    ApiRepository.getHeader().then((res) => {
      this.setState({
        headerData: {
          title: res.data.title,
          name: res.data.collaborator.name,
          email: res.data.collaborator.email,
          justification: res.data.justification,
          costCenter: {
            percentage: res.data.costCenters[0].percentage,
            name: res.data.costCenters[0].name,
          },
        },
      });
    });

    ApiRepository.getTimeLine().then((res) => {
      const timeLineItens = res.data.content.map((item) => {
        return {
          value: item.amountTotal,
          type: item.cardType,
          observation: item.notes,
          status: item.status,
          date: new Date(item.cardDate),
        };
      });
      this.setState({
        timeLineItens: timeLineItens,
      });
    });
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
          <HeaderCurrentRefund headerData={this.state.headerData} />
        </header>
        <TimeLine timeLineItens={this.state.timeLineItens} />
        <SideBar className="currentRefund__side-bar" />
      </div>
    );
  }
}

export default CurrentRefundPage;
