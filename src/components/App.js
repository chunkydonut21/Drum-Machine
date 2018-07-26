import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { selectedKey } from '../actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: '' };
  }

  escFunction = (event) => {
    this.props.selectedKey(event, this.props.drum);
    if(this.props.selected !== false) {
      new Audio(this.props.selected.sound).play();
      this.setState({ active: this.props.selected });
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    console.log(this.props.drum);
    
    return (
      <div id="drum-machine">
        <Header />
        <div id="wrap">
          <div id="one">
            {
              this.props.drum.map((item) => {
                return (
                  <div className="drum-pad" key={item.id} id={item.id} onClick={() => {
                    this.setState({ active: item });
                    new Audio(item.sound).play();
                  }}>
                    <button className="button">
                      <audio className="clip" id={item.hotkey} src={item.sound}></audio>
                      {item.hotkey}
                    </button>
                  </div>
                );
              })
            }
          </div>
          <div id="two">
            <div id="display"><h4>{this.state.active.name}</h4></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    drum: state.drum,
    selected: state.selected
  };
}

export default connect(mapStateToProps, { selectedKey })(App); 