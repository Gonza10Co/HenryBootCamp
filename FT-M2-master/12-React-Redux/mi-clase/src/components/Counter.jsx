import { Result } from "antd";
import { useSelector } from "react-redux";
import CounterActions from "./CounterActions";

export default function Counter() {
  const counter = useSelector((state) => state.count);
  return (
    <Result
      title="Este es un contador de ejemplo"
      subTitle={`El contador es ${counter}`}
      extra={<CounterActions />}
    />
  );
}
