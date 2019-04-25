import React from 'react';

export default class Modal extends React.Component {
    render(){
        return(
            <div id="modal">
                <div class="modal-background">
                    <div class="modal">
                        <div class="modal-body">
                            <div class="modal-sucess-icon">
                                <img src="img/success.png" alt="success" />
                            </div>
                            <div class="modal-text">PRODUTO ADICIONADO AO CARRINHO</div>
                            <div class="modal-btn">
                                <button class="close-modal-btn" id="close-modal-btn" onClick={this.props.toggleModal.bind(this)}>OK!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
