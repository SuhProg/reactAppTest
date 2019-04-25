import React from 'react';

import ImgRecommended from './ImgRecommended';

export default class RecProducts extends React.Component {
    render(){
        return(
            <div className='recommended-product'>
                <div className='recommended-product-img'>
                    <ImgRecommended renderImg={this.props.productsData[1].images}/>
                </div>
                <div className='recommended-product-info'>
                    <div className='recommended-product-title'><a href='#'>{this.props.productsData[1].name}</a></div>
                    <div className='full-price'>de <span className='full-number'>R$ {this.props.productsData[1].price}</span></div>
                    <div className='deal-price'>por <span className='deal-number'>R$ {this.props.productsData[1].deal}</span></div>
                    <div className='product-buy'><input type='submit' className='btn-buy' name='submit' value='COMPRA AE' id='1' onClick={this.props.addIn.bind(this)} /></div>
                </div>
            </div>
        );
    }
}