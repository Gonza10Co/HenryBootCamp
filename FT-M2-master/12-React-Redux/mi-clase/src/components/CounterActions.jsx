import { Button } from "antd";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions";

export default function CounterActions() {
  const dispatch = useDispatch()
  return (
    <>
      <Button key="inc" type="primary" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Button key="dec" type="primary" onClick={() => dispatch(decrement())}>
        -
      </Button>
    </>
  );
}
