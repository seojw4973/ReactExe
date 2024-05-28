import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import NotificationList from "./components/NotificationList";
import LifeCycleSample from "./LifeCycleSample";

function getRamdomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRamdomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

// function App() {
//   // return <NotificationList />;
// }

export default App;
