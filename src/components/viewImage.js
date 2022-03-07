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
      console.log("this is the state when it says it's image:", this.state.imgClassName);
      this.setState({imgClassName: "imageClicked"}, () => { console.log("this is the state after set to imageClicked: ", this.state.imgClassName)});
    } else {
      (console.log("hit else statement, state is: ", this.state.imgClassName))
      this.setState({imgClassName: "image"}, () => { console.log("this is the state when you hit the else statement and set it to 'image': ", this.state.imgClassName)});
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


