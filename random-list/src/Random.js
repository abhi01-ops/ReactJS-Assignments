import React, { Component } from 'react';

class RandomTextList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomTexts: [],
    };
  }
  
   
  generateRandomText = () => {
    const randomText = Math.random().toString(36).substring(2, 10);
    return randomText;
  };

  
  componentDidMount() {
    console.log("Mounted RandomTextList" );
    this.generateTextsAfterDelay();
  }

 
  generateTextsAfterDelay = () => {
    setTimeout(() => {
      let newTexts = [];
      for (let i = 0; i < 5; i++) {
        let randomText = this.generateRandomText();
        
        while (randomText.length < 8 || randomText.length > 64) {
          randomText = this.generateRandomText();
        }
        newTexts.push(randomText);
      }
      this.setState({ randomTexts: newTexts });
    }, 10000); 
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.randomTexts !== this.state.randomTexts) {
      console.log("RandomTextList updated");
    }
  }

  componentWillUnmount() {
    console.log("RandomTextList component unmounted");
  }

  render() {
    return (
      <div>
        <h2>Random Text List</h2>
        <ul>
          {this.state.randomTexts.length === 0 ? (
            <li>Inprogress...............</li>
          ) : (
            this.state.randomTexts.map((text, index) => <li key={index}>{text}</li>)
          )}
        </ul>
      </div>
    );
  }
}

export default RandomTextList;