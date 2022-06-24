import { Link } from "react-router-dom";

export default function User({id,name, username}) {
  return (
    <div>
      <Link to={`/user/${id}`}>
      <p>{name}</p>
      </Link>
      <p>{username}</p>
    </div>
  );
};
