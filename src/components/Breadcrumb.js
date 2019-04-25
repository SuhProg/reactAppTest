import React from 'react';

export default class Breadcrumb extends React.Component {
    render(){
        return(
            <div className='breadcrumb'>
                <h3 className='breadcrumb-text'>
                    <a className='prev-category' href='#'>N1</a> <span className='space'>></span> <a className='prev-category' href='#'>action figures</a> <span className='space'>></span> <a className='current-category' href='#' id='1'>Super Mario</a>
                </h3>
            </div>
        );
    }
}