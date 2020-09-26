import React, { Component } from 'react';
import Card from '../../../components/card/Card';
import './SideBar.css';
import ApiRepository from '../../../repositories/apiRepository';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

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
            <div className="sidebar__card__container-valor-receber">
              <span className="sidebar__card__container-valor-receber__title">
                Valor a receber
              </span>
              <span className="sidebar__card__container-valor-receber__value">
                {sideBarCard.currency +
                  ' ' +
                  (sideBarCard.declared - sideBarCard.received)}
              </span>
            </div>
            <div className="sidebar__card__container-resumo">
              <div className="sidebar__card__container-resumo__gasto-recebeu">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="sidebar__card__container-resumo__gasto-recebeu__icon"
                />

                <span className="sidebar__card__container-resumo__gasto-recebeu__title">
                  Gastou
                </span>
                <span className="sidebar__card__container-resumo__gasto-recebeu__value">
                  {sideBarCard.currency + ' ' + sideBarCard.declared}
                </span>
              </div>
              <div className="sidebar__card__container-resumo__gasto-recebeu">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="sidebar__card__container-resumo__gasto-recebeu__icon"
                />
                <span className="sidebar__card__container-resumo__gasto-recebeu__title">
                  Recebeu
                </span>
                <span className="sidebar__card__container-resumo__gasto-recebeu__value">
                  {sideBarCard.currency + ' ' + sideBarCard.received}
                </span>
              </div>
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
