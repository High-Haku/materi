import CounterNumber from "./Counter.number";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <button onClick={props.handleClickPlus}>+</button>
      <h1>{props.counter}</h1>

      <CounterNumber number={props.number} />
      <button>-</button>
    </div>
  );
}

const mapStateToProps = (props) => {
  return {
    counter: props.counter,
  };
};

export default connect(mapStateToProps, null)(Counter);
