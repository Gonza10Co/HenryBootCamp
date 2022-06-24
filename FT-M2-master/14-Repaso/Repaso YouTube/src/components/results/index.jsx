import { useSelector } from "react-redux";
import Page from "./page";

export default function Results() {
  const { suggestions } = useSelector((state) => state);
  return <Page suggestions={suggestions} />;
}
