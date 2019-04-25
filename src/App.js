import React, {Component} from 'react';

import Header from './components/Header';
import BodyInfo from './components/BodyInfo';
import Modal from './components/Modal';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
        total: 0,
        modal: false,
    };
  }

  _addToTotal() {
    this.setState({
      total: this.state.total + 1,
      modal: !this.state.modal,
    });
  }

  _toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render(){
    return (
      <div className="App">
            <Header itens={this.state.total} />
            <BodyInfo addIn={this._addToTotal.bind(this)} />
            {this.state.modal && (<Modal toggleModal={this._toggleModal.bind(this)} />)}
      </div>
    );
  }
}