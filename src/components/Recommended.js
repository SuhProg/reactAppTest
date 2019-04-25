import React from 'react';

import RecProducts from './RecProducts';

export default class Recommended extends React.Component {
    render(){
        return (
            <div className='recommended-products'>
                <div className='description-title'>
                    <h3>Quem viu, viu também</h3>
                </div>
                <div className='recommended-products-list' id='recommended-products-list'>
                    <RecProducts addIn={this.props.addIn.bind(this)} productsData={this.props.productsData}/>
                </div>
            </div>
        );
    }
}