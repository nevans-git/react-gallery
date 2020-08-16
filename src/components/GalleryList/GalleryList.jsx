import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';



class GalleryList extends Component {
    render(){
        console.log('**PUT this.props.SOMETHING here');

        return(
            <>
            {this.props.listOfPics.map((pictures) => {
                return(
                    <GalleryItem key={pictures.id} 
                    pictures={pictures} 
                    checkIn={this.props.checkingIn}/> // Not sure if I need checkIn={this.props.checkingIn}
                ) 

            })}

            </>
        )
    }


}


export default GalleryList;