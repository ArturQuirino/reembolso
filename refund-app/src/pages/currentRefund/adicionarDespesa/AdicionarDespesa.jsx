import React, { Component } from 'react';
import Button from '../../../components/button/Button';
import Card from '../../../components/card/Card';
import Input from '../../../components/input/input';
import './AdicionarDespesa.css';

class AdicionarDespesa extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className="adicionar-despesa">
        <h2 className="adicionar-despesa__titulo">Nova despesa</h2>
        <form className="adicionar-despesa__form">
          <div className="adicionar-despesa__container-form-inputs">
            <div className="adicionar-despesa__container-form-inputs__container-file">
              <span className="adicionar-despesa__container-form-inputs__container-file__title">
                Recibo, cupom ou nota fiscal*
              </span>
              <div className="adicionar-despesa__container-form-inputs__container-file__input">
                <input type="text" />
              </div>
              <span className="adicionar-despesa__container-form-inputs__container-file__obs">
                A imagem deve estar no formato JPG ou PNG.
              </span>
            </div>
            <div>
              <label htmlFor="typeNewExpense">Tipo</label>
              <Input type="text" id="typeNewExpense" />
              <label htmlFor="titleNewExpense">Título da despesa</label>
              <Input type="text" id="titleNewExpense" />
            </div>
          </div>
          <div className="adicionar-despesa__container-form-buttons">
            <Button> Cancelar</Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </Card>
    );
  }
}

export default AdicionarDespesa;
