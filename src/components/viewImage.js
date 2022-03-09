import React from 'react';
import '../css/viewImage.css';

class ViewImage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      image: props.location.state.staticContext,
      imgClassName: "image",
    }
  }

  toggleImgClassName() {
    console.log(this.state);
    // toggle image classname on click
    if (this.state.imgClassName == "image") {
      this.setState({imgClassName: "imageClicked"});
    } else {
      this.setState({imgClassName: "image"});
    }
  }

  render() {
    return (
      <div className="imageContainer">
        <div className="column">
          <div className={this.state.imgClassName} onClick={() => this.toggleImgClassName()} >
            <img className="imageInDiv" src={this.state.image.src} alt={this.state.image.alt}/>
          </div>
        {this.state.image.moreImages &&
          this.state.image.moreImages.map(image => (
            <img className="image" onClick={() => this.toggleImgClassName()} src={image.src} alt={image.alt}/>
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


