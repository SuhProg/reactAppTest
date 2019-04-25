import React from 'react';

import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import ProductInfo from './ProductInfo';
import Recommended from './Recommended';
import dummyData from '../data/data.json';

let productsData = dummyData;

export default class BodyInfo extends React.Component{
    render(){
        return ( 
            <div className='product-info' id='0'>
                <div className='container'>
                    <Breadcrumb />
                    <ProductInfo addIn={this.props.addIn.bind(this)} productData={productsData[0]} />
                    <Recommended addIn={this.props.addIn.bind(this)} productsData={productsData}/>
                </div>
                <Footer />
            </div>
        );
    }    
}
