import React from 'react';

export default class ImgRecommended extends React.Component {
    render(){

        console.log(this.props.renderImg);
        return(
            <img src={this.props.renderImg[0].url} alt='' />
        );
    }
}