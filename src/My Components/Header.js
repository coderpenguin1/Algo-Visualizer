import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Toolbar extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      const { generateArray } = this.props;
  
      generateArray(87);
      document.getElementById("changeSize").value = 50;
    }
  
    handleClick(algorithm) {
      const { updateAlgorithm } = this.props;
  
      updateAlgorithm(algorithm);
    }
  
    handleChange(evt) {
      const { generateArray } = this.props;
  
      generateArray(Math.floor((parseInt(evt.target.value) + 3) * 1.65));
    }
  
    render() {
      const {
        array,
        algorithm,
        generateArray,
        sort,
        isRunning,
      } = this.props;

      const isRunning = false;
      const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
      const cursor = isRunning ? "auto" : "pointer";
  
      return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">Algo Visualizer</a>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <div style={{display:'inline-block', width:'50px'}}/>
                              <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="#">Merge Sort</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Quick Sort</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Bubble Sort</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Insertion Sort</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Selection Sort</a>
                              </li>
                          <div style={{display:'inline-block', width:'50px'}}/>
                              <input
                                  id="changeSize"
                                  type="range"
                                  min="0"
                                  max="100"
                                  style={{background: color, cursor: cursor}}
                                  disabled={isRunning ? "disabled" : null}
                              />
                          <div style={{display:'inline-block', width:'50px'}}/>
                              <li className="nav-item">
                                  <button className="btn btn-outline-success" type="submit">Generate New Array</button>
                              </li>
                      </ul>
                  </div>
              </div>
          </nav>
                  )
}

export default Header;
