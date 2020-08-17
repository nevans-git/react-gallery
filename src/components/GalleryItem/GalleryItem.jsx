import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

    state = {
        imageAndDesc: true
    }

    imageFlipper = () => {
        this.setState({
            imageAndDesc: !this.state.imageAndDesc
        })
    }

    render(){

        console.log(this.props.pictures);

        const picturesUsed = this.props.picturesUsed;


        return(
        <>
        {/* click to flip desc. should go in here... Reference the Ternary Operator from RABIN-REACT-REVIEW*/}
            <div onClick={this.imageFlipper}>
                {this.state.imageAndDesc ? <img className='picture' src={picturesUsed.path}/> : <h4>{picturesUsed.description}</h4>}


           

            </div>

            <button onClick={() => this.props.likeBtn(picturesUsed.id)}>LIKE</button>
            <p>Total Likes: {picturesUsed.likes} </p>

        </>

        )
    }



}


export default GalleryItem;