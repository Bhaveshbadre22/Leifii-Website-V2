import React from "react";
import ReactDOM from "react-dom";
import "./ImageSlider.css";

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.beforeRef = React.createRef();
    this.containerRef = React.createRef();
    this.state = { initialized: false };
  }

  componentDidMount() {
    this.initializeSlider();
    window.addEventListener("resize", this.initializeSlider);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.initializeSlider);
  }

  initializeSlider = () => {
    if (!this.state.initialized) {
      const containerWidth = this.containerRef.current.offsetWidth;
      const width = containerWidth / 2;
      this.beforeRef.current.style.width = `${width}px`;
      this.sliderRef.current.style.left = `${width}px`;
      this.setState({ initialized: true });
    }
  };

  dragTheImg = (e) => {
    // Check for touches array to support mobile devices
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const containerRect = this.containerRef.current.getBoundingClientRect();
    const sliderPosition = clientX - containerRect.left;
    const width = Math.max(0, Math.min(sliderPosition, containerRect.width));

    this.beforeRef.current.style.width = `${width}px`;
    this.sliderRef.current.style.left = `${width}px`;
  };

  render() {
    return (
      <div className="imgSliderWrapp">
        <div
          className="container"
          ref={this.containerRef}
          onMouseMove={this.dragTheImg}
          onTouchMove={this.dragTheImg} // Add touch support
        >
          <div className="img-afterWrap">
            <img
              src="https://images.unsplash.com/photo-1710362921917-2e33bb342a23?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTIzNjg0MTN8&ixlib=rb-4.0.3&q=85"
              alt="After"
            />
          </div>
          <div className="img-beforeWrap" ref={this.beforeRef}>
            <img
              src="https://images.unsplash.com/photo-1706820642455-12b6d3ea4a66?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTIzNjgzMDB8&ixlib=rb-4.0.3&q=85"
              alt="Before"
            />
          </div>
          <div className="sliderIndicator" ref={this.sliderRef}></div>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
