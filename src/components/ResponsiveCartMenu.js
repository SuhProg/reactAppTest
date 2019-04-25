import React from 'react';

export default class ResponsiveCartMenu extends React.Component {

    _hideCart() {
        let myMenu = document.getElementById('cart-menu');
        myMenu.style.WebkitAnimationName = 'hide-cart';
        myMenu.style.webkitAnimationDuration = '.5s';
        myMenu.style.left = '-100%';
    }
    
    render(){
        return(
            <div className='cart-menu' id="cart-menu">
                <a className='btn-close-cart' id='close-cart' onClick={this._hideCart}><i className='fas fa-times fa-lg'></i></a>    
                <ul className='cart-itens-group'>
                    <h1 className='cart-title'>Meu Carrinho</h1>
                    <div id='cart-list'></div>
                    <div id='cart-footer'><h1 className='cart-footer-title cart-title' id='cart-footer-title'>Seu carrinho está vazio :(</h1></div>
                </ul>
            </div>
        );      
    }
}