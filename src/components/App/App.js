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
    console.log(id);
    axios.put(`/gallery/like/${id}`).then((response) => {
      console.log(response);
      this.getGalleryImages();
  
    }).catch((error) => {
      alert('Error in PUT: ');
  
    })
  } 



  render() {
    console.log('rendered!', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery Of My Life</h1>
        </header>
        <br/>
        
        <br/>
        <GalleryList 
        listOfPics={this.state.galleryList}
        likeBtn = {this.likeBtn} />

       {/* {JSON.stringify(this.state)} */}

        <footer className="App-footer">
          
          <h1 className="App-footer-title">Thanks for viewing!</h1>
         
        </footer> 
       
      </div>
    );
  }
}

export default App;
