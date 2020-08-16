import React, { Component } from 'react';


class GalleryItem extends Component {
    render(){

        console.log(this.props.pictures);
        return(
        <>
        {/* click to flip desc. should go in here */}


            <img src={this.props.pictures.path} alt=""/>




        </>

        )
    }



}


export default GalleryItem;