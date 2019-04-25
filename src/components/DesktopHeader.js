import React from 'react'

export default class DesktopHeader extends React.Component {
    render(){
        return(
            <div className='desktop-header'>
                <ul className='desktop-header container desktop'>
                    <li className='header-logo'>
                        <a href='#'><img src='img/LOGO.png' alt='N1 logo' /></a>
                    </li>
                    <li className='header-links'>
                        <ul>
                            <li className='menu-link'><a href='#'>Games</a></li>
                            <li className='menu-link'><a href='#'>Presentes</a></li>
                            <li className='menu-sale-link'><a href='#'>SALE</a></li>
                            <li className='header-search-bar'>
                                <a href='#'>
                                    <i className='fas fa-search'></i>
                                </a>
                                <input type='text' placeholder='O que deseja buscar?' />
                            </li>
                        </ul>
                    </li>
                    <li className='cart-icon cart-num' data-count={this.props.itens}>
                        <a href='#'><i className='fas fa-shopping-cart fa-lg' data-count='4b'></i></a>
                    </li>
                </ul>
            </div>
        );    
    }
}