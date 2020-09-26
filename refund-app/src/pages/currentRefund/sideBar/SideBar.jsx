import React, { Component } from 'react';
import Card from '../../../components/card/Card';
import './SideBar.css';
import ApiRepository from '../../../repositories/apiRepository';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { sideBarData: [] };
  }

  componentDidMount() {
    ApiRepository.getSideBar().then((res) => {
      const cardsSideBar = res.data.content.map((contentCard) => {
        return {
          declared: contentCard.declared,
          received: contentCard.received,
          returned: contentCard.returned,
          status: contentCard.accountabilityStatus,
          currency: contentCard.currency.symbol,
        };
      });
      this.setState({ sideBarData: cardsSideBar });
    });
  }

  render() {
    return (
      <div className="sidebar">
        {this.state.sideBarData.map((sideBarCard, index) => (
          <Card className="sidebar__card" key={sideBarCard.currency + index}>
            <div className="sidebar__card__container-status">
              <span className="sidebar__card__container-status__title">
                Status
              </span>
              <span className="sidebar__card__container-status__status">
                {sideBarCard.status}
              </span>
            </div>
            <div>
              <span>Valor a receber</span>
              <span>{sideBarCard.declared - sideBarCard.received}</span>
            </div>
            <div>
              <span>Extrato</span>
              <div className="sidebar__card__extrato">
                <span>Descrição</span>
                <span>Valor</span>
                <div>
                  <span>Despesas declaradas</span>
                  <span>Despesas declaradas pelo trooper</span>
                </div>
                <span>{sideBarCard.currency + ' ' + sideBarCard.declared}</span>
                <div>
                  <span>Despesas aprovadas</span>
                  <span>Despesas aprovadas pelo trooper</span>
                </div>
                <span>{sideBarCard.currency + ' ' + sideBarCard.received}</span>
                <div>
                  <span>Pagamento realizado</span>
                  <span>Pagamento realizado pelo financeiro</span>
                </div>
                <span>{sideBarCard.currency + ' ' + sideBarCard.returned}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default SideBar;
