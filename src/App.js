import React from "react";
import "./App.css";
import "./index.css";
import "./title.css";
import Title from "./title.js";
import Counter from "./counter.js";
import ColorfulLogo from "./logo.js";
import ChangeStyle from "./changestyle.js";

class App extends React.Component {
   state = {
      counter: 0,
      color: "#000",
      bgColor: null,
   };

   handleIncreaseCounter = () => {
      this.setState({ counter: this.state.counter + 1 });
   };

   handleDecreaseCounter = () => {
      this.setState({ counter: this.state.counter - 1 });
   };

   handleChangeColor = () => {
      this.setState({
         color: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
      });
   };

   handleChangeBgColor = () => {
      this.setState({
         bgColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
      });
   };

   render() {
      const { counter, color } = this.state;
      const bgColor = {
         backgroundColor: this.state.bgColor,
      };
      return (
         <div className="App" style={bgColor}>
            <Title />
            <ColorfulLogo color={color} />
            <ChangeStyle
               changeColor={this.handleChangeColor}
               changeBgColor={this.handleChangeBgColor}
            />
            <p className="counter">{counter}</p>
            <Counter
               counter={counter}
               increaseCounter={this.handleIncreaseCounter}
               decreaseCounter={this.handleDecreaseCounter}
            />
         </div>
      );
   }
}

export default App;
