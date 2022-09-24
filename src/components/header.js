import { Link } from "react-router-dom";
import { logout } from "../util";
const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
