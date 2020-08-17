import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';



class GalleryList extends Component {
    render(){
        console.log(this.props.listOfPics)

        return(
            <>
            {this.props.listOfPics.map((picturesUsed) => {
                return(
                
                    <GalleryItem 
                    key={picturesUsed.id}
                    picturesUsed={picturesUsed}
                    likeBtn={this.props.likeBtn}/>
                )
            })} // FIGURE OUT WHY THIS CURLY BRACE IS YELLING 

            </>

        )
    }


}


export default GalleryList;