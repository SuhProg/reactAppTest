import React from 'react';

export default class Footer extends React.Component {
    render(){
        return (
            <footer className='footer'>
                <div className='footer-logo'>
                    <img src='img/logo-n1-white.png' alt='N1 logo' />
                </div>
                <div className='footer-text'>
                    <p>Agência N1 - Todos os direitos reservados</p>
                </div>
            </footer>
        );
    }
}