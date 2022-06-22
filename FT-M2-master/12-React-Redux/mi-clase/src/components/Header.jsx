import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserFromAPI } from "../store/actions";

export default function Header() {
  const dispatch = useDispatch();
  const { user, count } = useSelector((state) => state)
  useEffect(() => {
    dispatch(getUserFromAPI(count));
  }, [count]);

  return <nav>{user?.name}</nav>;
}
