import "./index.css";
import "./counter.css";

const Counter = (props) => {
   return (
      <div className="container">
         <div className="counter-container">
            <button onClick={props.increaseCounter}>+</button>
            <button onClick={props.decreaseCounter}>-</button>
         </div>
      </div>
   );
};

export default Counter;
