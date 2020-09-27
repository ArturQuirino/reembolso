import React, { Component } from 'react';
import Button from '../../../components/button/Button';
import Card from '../../../components/card/Card';
import Input from '../../../components/input/input';
import Select from '../../../components/select/Select';
import './AddExpense.css';
import ApiRepository from '../../../repositories/apiRepository';
import Alert from '../../../components/alert/Alert';

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseType: '',
      currency: '',
      amountSpent: 0,
      amountTotal: 0,
      notes: '',
      cardDate: '',
      file: '',

      openedAddExpenseCard: false,
      alertIsOpen: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.setSelectedFile = this.setSelectedFile.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  setSelectedFile(file) {
    this.setState({ resourceUrl: file });
  }

  toggleAddExpenseCard = () => {
    const openedAddExpenseCard = !this.state.openedAddExpenseCard;
    this.setState({ openedAddExpenseCard });
  };

  handleSubmitForm(event) {
    event.preventDefault();

    ApiRepository.addExpense({
      expenseTypeCode: this.state.expenseType,
      currencyCode: this.state.currency,
      amountSpent: this.state.amountSpent,
      amountTotal: this.state.amountTotal,
      notes: this.state.notes,
      resourceUrl: this.state.file,
      cardDate: Date.parse(this.state.cardDate),
    }).then(() => {
      this.setState({ openedAddExpenseCard: false, alertIsOpen: true });
      setTimeout(() => {
        this.setState({ alertIsOpen: false });
      }, 3000);
    });
  }
  render() {
    return (
      <section className="adicionar-despesa__container">
        <Button
          onClick={this.toggleAddExpenseCard}
          className="adicionar-despesa__button"
        >
          Adicionar Despesa
        </Button>
        {this.state.openedAddExpenseCard && (
          <Card className="adicionar-despesa">
            <h2 className="adicionar-despesa__titulo">Nova despesa</h2>
            <form
              className="adicionar-despesa__form"
              onSubmit={this.handleSubmitForm}
            >
              <div className="adicionar-despesa__container-form-inputs">
                <div className="adicionar-despesa__container-form-inputs__container-file">
                  <label className="adicionar-despesa__container-form-inputs__title">
                    Recibo, cupom ou nota fiscal*
                  </label>
                  <div className="adicionar-despesa__container-form-inputs__container-file__input">
                    <label
                      htmlFor="file"
                      className="adicionar-despesa__container-form-inputs__container-file__label"
                    >
                      Selecione um arquivo do seu computador
                    </label>
                    <Input
                      type="file"
                      id="file"
                      name="file"
                      accept="image/png, image/jpeg"
                      style={{ visibility: 'hidden' }}
                      onChange={(e) => this.setSelectedFile(e.target.files[0])}
                    />
                  </div>
                  <span className="adicionar-despesa__container-form-inputs__container-file__obs">
                    A imagem deve estar no formato JPG ou PNG.
                  </span>
                </div>
                <div className="adicionar-despesa__container-form-inputs__container-texts">
                  <label
                    htmlFor="expenseType"
                    className="adicionar-despesa__container-form-inputs__title"
                  >
                    Tipo*
                  </label>
                  <Select
                    type="text"
                    id="expenseType"
                    name="expenseType"
                    onChange={this.handleInputChange}
                  >
                    <option>hotel-fee</option>
                    <option>food</option>
                    <option>transport</option>
                  </Select>
                  <label
                    htmlFor="notes"
                    className="adicionar-despesa__container-form-inputs__title"
                  >
                    Título da despesa*
                  </label>
                  <Input
                    type="text"
                    id="notes"
                    name="notes"
                    onChange={this.handleInputChange}
                  />
                  <label
                    htmlFor="cardDate"
                    className="adicionar-despesa__container-form-inputs__title"
                  >
                    Data do comprovante*
                  </label>
                  <Input
                    type="date"
                    id="cardDate"
                    name="cardDate"
                    onChange={this.handleInputChange}
                  />
                  <label
                    htmlFor="currency"
                    className="adicionar-despesa__container-form-inputs__title"
                  >
                    Moeda*
                  </label>
                  <Select
                    type="text"
                    id="currency"
                    name="currency"
                    onChange={this.handleInputChange}
                  >
                    <option>BRL</option>
                    <option>USD</option>
                    <option>MXN</option>
                  </Select>
                  <label
                    htmlFor="amountTotal"
                    className="adicionar-despesa__container-form-inputs__title"
                  >
                    Valor da nota / cupom*
                  </label>
                  <Input
                    type="number"
                    min="0.01"
                    step="0.01"
                    id="amountTotal"
                    name="amountTotal"
                    onChange={this.handleInputChange}
                  />
                  <label
                    htmlFor="amountSpent"
                    className="adicionar-despesa__container-form-inputs__title"
                  >
                    Valor a ser considerado*
                  </label>
                  <Input
                    type="number"
                    min="0.01"
                    step="0.01"
                    id="amountSpent"
                    name="amountSpent"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="adicionar-despesa__container-form-buttons">
                <Button> Cancelar</Button>
                <Button type="submit" color="primary">
                  Salvar
                </Button>
              </div>
            </form>
          </Card>
        )}
        {this.state.alertIsOpen && <Alert>Despesa salva com sucesso</Alert>}
      </section>
    );
  }
}

export default AddExpense;
