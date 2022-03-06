import React, {useState} from 'react';
import '../css/viewImage.css';

class ViewImage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      image: props.location.state.staticContext
    }
    const [imgClassName, setClassName] = useState("image")
  }


  toggleImgClassName() {
    // toggle image classname on click
    if (this.imgClassName = "image") {
      this.setClassName("imageClicked")
      console.log(this.imgClassName);
    } else {
      this.setClassName("image")
    }
  }

  render() {
    return (
      <div className="imageContainer">
        <div className="column">
          <img className={this.state.imgClassName} onClick={() => this.toggleImgClassName()} src={this.state.image.src} alt={this.state.image.alt}/>
        {this.state.image.moreImages &&
          this.state.image.moreImages.map(image => (
            <img className="image" src={this.state.image.src} alt={this.state.image.alt}/>
          ))
        }
        </div>
        <div className="column2">
          <h1>{this.state.image.alt}</h1>
          <p>L = {this.state.image.length}"</p>
          <p>W = {this.state.image.width}"</p>
          <p>D = {this.state.image.depth}"</p>
          <p className="description">{this.state.image.description}</p>
        </div>
      </div>
    )
  }
}

export default ViewImage;


