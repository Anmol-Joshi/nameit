import React, { useState } from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

// function App() {
//   return <h1>This is a functional component</h1>;
// }
const App = () => {
  const [headerText, setHeaderText] = useState("Name It");
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedNames(inputText ? name(inputText) : []);
  };
  return (
    <div>
      <Header headerExpanded={headerExpanded} headerTitle={headerText} />
      <SearchBox onInputChange={handleInputChange} />
      <ResultsContainer suggestedNames={suggestedNames} />
    </div>
  );
  // class App extends React.Component {
  //   // state = { ----->First type to define a state
  //   //   headerText: "Name It",
  //   // };
  //   constructor() {
  //     //----->Second way to define a state
  //     super();
  //     this.state = {
  //       headerText: "Name It",
  //       headerExpanded: true,
  //       suggestedNames: [],
  //     };
  //   }
  //   handleInputChange = (inputText) => {
  //     this.setState({
  //       headerExpanded: !inputText,
  //       suggestedNames: inputText ? name(inputText) : [],
  //     });
  //   };

  //   render() {
  //     return (
  //       <div>
  //         <Header
  //           headerExpanded={this.state.headerExpanded}
  //           headerTitle={this.state.headerText}
  //         />
  //         <SearchBox onInputChange={this.handleInputChange} />
  //         <ResultsContainer suggestedNames={this.state.suggestedNames} />
  //       </div>
  //     );
  //   }
};
export default App;
