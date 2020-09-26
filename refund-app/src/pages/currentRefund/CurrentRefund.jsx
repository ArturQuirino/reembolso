import React, { Component, Fragment } from 'react';
import BreadCrumb from '../../components/breadcrumbs/Breadcrumbs';

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

  render() {
    return (
      <Fragment>
        <header>
          <BreadCrumb links={this.breadcrumb} />
        </header>
      </Fragment>
    );
  }
}

export default CurrentRefundPage;
