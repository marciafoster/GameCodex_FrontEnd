import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/games">GameCodex</Link>
      </h1>
      <button>
        <Link to="/games/new">New Game</Link>
      </button>
      <p>THIS IS THE NAV BAR!!!</p>
    </nav>
  );
}
