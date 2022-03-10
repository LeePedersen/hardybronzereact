import React from 'react';
import '../css/viewImage.css';

class ViewImage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      image: props.location.state.staticContext,
      imgClassName: "invisible",
      imgClickedSrc: null,
    }
  }

  toggleViewImage(source) {
    // console.log(this.state);
    console.log(source); // should be null, hmm
    // toggle image classname on click
    if (this.state.imgClassName == "invisible") {
      this.setState({imgClickedSrc: source});
      this.setState({imgClassName: "imageClicked"});
    } else {
      this.setState({imgClickedSrc: null});
      this.setState({imgClassName: "invisible"});
    }
  }

  render() {
    return (
      <div className="imageContainer">
        <div className="column">
          <div className="image" >
            <img className="imageInDiv" onClick={() => this.toggleViewImage(this.state.image.src)} src={this.state.image.src} alt={this.state.image.alt}/>
          </div>
        {this.state.image.moreImages &&
          this.state.image.moreImages.map(image => (
            <img className="image" onClick={() => this.toggleViewImage(image.src)} src={image.src} alt={image.alt}/>
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
        <div className={this.state.imgClassName} >
            <img className="imageInDiv" onClick={() => this.toggleViewImage()} src={this.state.imgClickedSrc} alt={this.state.image.alt}/>
        </div>

      </div>
    )
  }
}

export default ViewImage;


