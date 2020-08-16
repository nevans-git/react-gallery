import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';



class GalleryList extends Component {
    render(){
        console.log('**PUT this.props.SOMETHING here');

        return(
            
            this.props.listOfPics.map((pictures) => {
                console.log(pictures);
                return(
                    <GalleryItem key={pictures.id} 
                    pictures={pictures} 
                    /> 
                
                ) 

            })

        )
    }


}


export default GalleryList;