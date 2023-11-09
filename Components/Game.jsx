import { Link } from "react-router-dom";
import "../src/Styles/Game.css";

export default function Game({ game }) {
  return (
    <Link to={`/games/${game.id}`}>
      <div className="game-card">
        <div className="game-img">
          <img
            src="https://m.media-amazon.com/images/I/71rmY66nqoL._AC_UF1000,1000_QL80_.jpg"
            alt="{}"
          />
        </div>
        <div className="game-description">
          <h3>{game.name}</h3>
          <p>{game.release_year}</p>
          <p>{game.genre}</p>
          <p>{game.rating}</p>
          <p>{game.discontinued}</p>
          <p>{game.game_studio}</p>
          <p>{game.system}</p>
        </div>
      </div>
    </Link>
  );
}
