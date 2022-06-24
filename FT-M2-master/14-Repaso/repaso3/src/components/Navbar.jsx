import { Link } from "react-router-dom";

export default () => (
  <nav>
    <Link to="/">
      <p>Home</p>
    </Link>
    <Link to="/about">
      <p>About</p>
    </Link>
  </nav>
);
