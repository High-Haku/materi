import CounterNumber from "./Counter.number";
import { connect } from "react-redux";
import { plusCounter } from "../redux/actions/counter.actions";

function Counter(props) {
  console.log("props", props);
  return (
    <div>
      <button
        onClick={() => {
          props.plusCounter();
        }}
      >
        +
      </button>
      <h1>{props.counter}</h1>

      {/* <CounterNumber number={props.number} /> */}
      <button>-</button>
    </div>
  );
}

const mapStateToProps = (props) => {
  return {
    counter: props.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plusCounter: () => dispatch(plusCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
