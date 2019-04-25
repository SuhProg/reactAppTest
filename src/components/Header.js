import React from 'react';

import ResponsiveMenu from './ResponsiveMenu';
import ResponsiveCartMenu from './ResponsiveCartMenu';
import DesktopHeader from './DesktopHeader';

export default class Header extends React.Component {
    
    _showMenu() {
        let myMenu = document.getElementById('nav-bar');
        myMenu.style.WebkitAnimationName = 'show-menu';
        myMenu.style.webkitAnimationDuration = '.5s';
        myMenu.style.left = '0';
    }  

    _showCart() {
        let myMenu = document.getElementById('cart-menu');
        myMenu.style.WebkitAnimationName = 'show-cart';
        myMenu.style.webkitAnimationDuration = '.5s';
        myMenu.style.left = '0';
    }    

    render(){
        return(
            <div>
                <header className='header'>
                    <div className='responsive-header'>
                        <button className='btn-menu' id='menu' onClick={this._showMenu}><i className='fas fa-bars fa-lg'></i></button>
                        <button className='btn-cart fa-stack has-badge cart-num' data-count={this.props.itens} id='cart' onClick={this._showCart}><i className='fas fa-shopping-cart fa-lg' data-count='4b'></i></button>
                        <a href='index.html'><img className='logo-img' src='img/LOGO.png' alt='N1 logo' /></a>
                    </div>

                    <ResponsiveMenu />
                    <ResponsiveCartMenu />
                    <DesktopHeader itens={this.props.itens}/>

                </header>
                <div className='search-bar'>
                    <div className='search-bar-position'>
                        <a href='#'>
                            <i className='fas fa-search'></i>
                        </a>
                        <input type='text' name='search' placeholder='O que deseja buscar?' />
                    </div>
                </div>
            </div>
        );
    }
}