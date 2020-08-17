import React, { Component } from 'react';


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

        const pictuersUsed = this.props.pictuersUsed


        return(
        <>
        {/* click to flip desc. should go in here... Reference the Ternary Operator from RABIN-REACT-REVIEW*/}
            <div onClick={this.imageFlipper}>
                {this.state.imageAndDesc ? <img src={picturesUsed.path}/> : <p>{picturesUsed.description}</p>}


            {/* <img src={this.props.pictures.path} alt=""/> */}

            </div>

            <button onClick={() => this.props.likeBtn(pictuersUsed.id)}>LIKE</button>
            <p>{picturesUsed.likes} : Total Likes </p>

        </>

        )
    }



}


export default GalleryItem;