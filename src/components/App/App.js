import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

class App extends Component {

  state = {
    galleryList: [
      {
        id: 2,
        title: 'Image 1',
        description: 'This is an image of my pup Bentley.',
        path: '',
      },
      {
        id: 3, 
        title: 'Image 2',
        description: 'This is an image of me watching the sunset on a blanket in Minneapolis',
        path: '',
      },
      {
        id: 4, 
        title: 'Image 3',
        description: 'This is an image of my buddy Derrick and I having a laugh in before jetskiing in Cabo, Mexico.',
        path: '',
      },
      {
        id: 5, 
        title: 'Image 4',
        description: '',
        path: '',
      },
      {
        id: 6, 
        title: 'Image 5',
        description: '',
        path: '',
      },
      {
        id: 7, 
        title: 'Image 6',
        description: '',
        path: '',
      }
    ]
  }

  getGalleryImages = () => {

    axios.get('/gallery').then((response) => {
      console.log(response);

    }).catch((error) => {
      console.log(error);
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
        listOfPics={this.state.galleryList}/>
        <GalleryItem />
        <img src="images/goat_small.jpg"/>
        <img src="images/pic1.jpg"></img>
        <img src="images/pic2.jpg"></img>
        <img src="images/pic3.jpg"></img>
        <img src="images/pic4.jpg"></img>
        <img src="images/pic5.jpg"></img>
        <img src="images/pic6.jpg"></img>
      </div>
    );
  }
}

export default App;
