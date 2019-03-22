import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Specs from './components/Specs'
import Features from './components/Features'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }
  
// needed to do an arrow function because it was not understanding the basic function expression
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    return ( <div className="App">
      {/* here i am rendering the component files i created */}
        <Header />  
        <main>
          {/* i renamed the props */}
          <Specs cookies={this.props.slimjim} selected={this.state.selected} pizza={this.updateFeature}/>
          <Features icecream={this.state.selected}/>
        </main>
      </div>
   );
  }
}

export default App;  
