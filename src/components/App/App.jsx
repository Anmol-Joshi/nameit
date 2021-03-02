import React from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

// function App() {
//   return <h1>This is a functional component</h1>;
// }
class App extends React.Component {
  // state = { ----->First type to define a state
  //   headerText: "Name It",
  // };
  constructor() {
    //----->Second way to define a state
    super();
    this.state = {
      headerText: "Name It",
      headerExpanded: true,
      suggestedNames: [],
    };
  }
  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headerTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}
export default App;
