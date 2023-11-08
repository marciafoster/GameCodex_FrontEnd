import { Link } from "react-router-dom";
import "../src/Styles/NavBar.css"

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="title">
        <Link to="/games">GameCodex</Link>
      </h1>
      <button>
        <Link to="/games/new">New Game</Link>
      </button>
      {/* <p>THIS IS THE NAV BAR!!!</p> */}
    </nav>
  );
}
