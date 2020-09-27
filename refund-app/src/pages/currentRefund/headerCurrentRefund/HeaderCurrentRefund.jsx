import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/card/Card';
import './HeaderCurrentRefund.css';
import Select from '../../../components/select/Select';
import ApiRepository from '../../../repositories/apiRepository';

class HeaderCurrentRefund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
      email: '',
      justification: '',
      costCenter: {},
      purpose: '',
      project: '',
      date: '',
    };
  }

  componentDidMount() {
    ApiRepository.getHeader().then((res) => {
      this.setState({
        title: res.data.title,
        name: res.data.collaborator.name,
        email: res.data.collaborator.email,
        justification: res.data.justification,
        costCenter: {
          percentage: res.data.costCenters[0].percentage,
          name: res.data.costCenters[0].name,
        },
        purpose: res.data.purpose,
        project: res.data.project.title,
        date: res.data.createdOn,
      });
    });
  }
  render() {
    return (
      <Card className="header-current-refund">
        <h1 className="header-current-refund__header">{this.state.title}</h1>
        <div className="header-current-refund__properties">
          <span className="header-current-refund__properties__label">Nome</span>
          <span>{this.state.name}</span>
          <span className="header-current-refund__properties__label">
            E-mail
          </span>
          <span>{this.state.email}</span>
          <span className="header-current-refund__properties__label">
            Justificativa
          </span>
          <span>{this.state.justification}</span>
          <span className="header-current-refund__properties__label">
            Finalidade
          </span>
          <span>{this.state.purpose}</span>
          <span className="header-current-refund__properties__label">
            Projeto
          </span>
          <span>{this.state.project}</span>
          <span className="header-current-refund__properties__label">Data</span>
          <span>{new Date(this.state.date).toLocaleDateString()}</span>
        </div>
        <div className="header-current-refund__analist-cost-center">
          <div className="header-current-refund__analist-cost-center__analist">
            <label htmlFor="analist">Atribuir analista</label>
            <Select name="analist" name="analist">
              <option>Artur Quirino</option>
              <option>Alan Turing</option>
              <option>Ada Lovelace</option>
              <option>Bill Gates</option>
            </Select>
          </div>
          <div className="header-current-refund__analist-cost-center__cost-center">
            <span>Centro de Custo</span>
            <span>
              {this.state.costCenter?.percentage}% -{' '}
              {this.state.costCenter?.name}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

HeaderCurrentRefund.propTypes = {
  headerData: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    justification: PropTypes.string,
    costCenter: PropTypes.shape({
      percentage: PropTypes.number,
      name: PropTypes.string,
    }),
  }),
};

export default HeaderCurrentRefund;
