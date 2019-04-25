import React from 'react';

export default class ProductInfo extends React.Component {
    
    render() {
        return(
            <div id='product-information'>
                <div className='product-title'>
                    <h3 className='product-title-text mobile'>{this.props.productData.name}</h3>
                </div>
                <div className='product-desktop-info'>
                    <div className='product-thumb-img desktop'>
                        <img src={this.props.productData.images[0].url} alt={this.props.productData.name} />
                    </div>
                    <div className='image-gallery'>
                        <div className='product-img'>
                            <img src={this.props.productData.images[0].url} alt={this.props.productData.name} />
                        </div>
                    </div>
                    <div className='product-thumb-img mobile'>
                        <img src={this.props.productData.images[0].thumb} alt={this.props.productData.name} />
                    </div>
                    <div>
                        <div className='product-title'>
                            <h3 className='product-title-text desktop'>{this.props.productData.name}</h3>
                        </div>
                        <div className='product-price'>
                            <div className='full-price'>de <span className='full-number'>R$ {this.props.productData.price}</span></div>
                            <div className='deal-price'>por <span className='deal-number'>R$ {this.props.productData.deal}</span></div>
                            <div className='product-buy'><input className='btn-buy btn-buy-product' id='0' type='button' name='buy-btn' value='COMPRA AE' onClick={this.props.addIn.bind(this)} /></div>
                        </div>
                        <div className='freight-input'>
                            <h3 className='freight-text'>CALCULE O FRETE</h3><br />
                            <form className='freight'> 
                                <input className='freight-5' type='number' name='freight' placeholder='00000' max='99999' required />
                                <input className='freight-3' type='number' name='freight' placeholder='000' max='999' required />
                                <input className='btn-freight' type='submit' value='Calcular' />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='mid-freight'>
                    <h3 className='freight-text'>CALCULE O FRETE</h3><br />
                    <form className='freight'> 
                        <input className='freight-5' type='number' name='freight' placeholder='00000' max='99999' required />
                        <input className='freight-3' type='number' name='freight' placeholder='000' max='999' required />
                        <input className='btn-freight' type='submit' value='Calcular' />
                    </form>
                </div>
                <div className='product-description'>
                    <div className='description-title'>
                        <h3>Descrição do produto</h3>
                    </div>
    
                    <div className='description-text'>{this.props.productData.description}</div>
                </div>
            </div>
        );
    }
}

