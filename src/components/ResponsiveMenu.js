import React from 'react';

export default class ResponsiveMenu extends React.Component {
    _hideMenu() {
        let myMenu = document.getElementById('nav-bar');
        myMenu.style.WebkitAnimationName = 'hide-menu';
        myMenu.style.webkitAnimationDuration = '.5s';
        myMenu.style.left = '100%';
    }
    
    render(){
        return (
            <nav className='nav-bar' id='nav-bar'>
                <a className='btn-close' id='close' onClick={this._hideMenu}><i className='fas fa-times fa-lg'></i></a>
                <ul className='menu-btn-group'>
                    <li className='menu-link'><a href='#'>Games</a></li>
                    <li className='menu-link'><a href='#'>Presentes</a></li>
                    <li><hr className='line' /></li>
                    <li className='menu-sale-link'><a href='#'>SALE</a></li>
                    <li className='menu-input'><a href='#'><i className='fas fa-search'></i></a><input type='text' name='search' placeholder='O que deseja buscar?' /></li>
                    <li className='menu-logo'><a href='#'><img src='img/LOGO.png' alt='N1 logo' /></a></li>
                </ul>
            </nav>
        );
    }
} 