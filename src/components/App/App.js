import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

class App extends Component {
  
  
  
  
  
  state = {
    galleryList: [
      {
        id: '',
        title: '',
        description: '',
        path: '',
        likes: 0
      }
    ]
  }

  componentDidMount(){
    this.getGalleryImages();
  }

  getGalleryImages = () => {

    axios.get('/gallery').then((response) => {
      console.log(response);

      this.setState({
        galleryList: response.data
      })

    }).catch((error) => {
      alert('Error in GET: ');
    })
  }


  // Like button is a POST
  likeBtn = (id) => {
    axios.put(`/gallery/like/${id}`).then((response) => {
      console.log(response);
  
    }).catch((error) => {
      alert('Error in PUT: ');
  
    })
  } 



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList 
        listOfPics={this.state.galleryList}
        likeBtn = {this.likeBtn}/>
        
       
      </div>
    );
  }
}

export default App;
