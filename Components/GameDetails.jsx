import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../src/Styles/Game.css";

import Game from "./Game";

const API = import.meta.env.VITE_API_URL;

export default function GameDetails() {
  const [game, setGame] = useState([]);
  let navigate = useNavigate();
  let { index } = useParams();

  const fetchData = async () => {
    try {
      fetch(`${API}/Games/${index}`)
        .then((res) => res.json())
        .then((res) => {
          setGame(res);
          // console.log(res);
        });
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // Displaying one game
  useEffect(() => {
    fetchData();
  }, [index]);

  const handleDelete = () => {
    fetch(`${API}/games/${index}`, {
      method: "Delete",
    }).then(() => navigate("/games"));
  };

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      handleDelete();
    }
  };

  return (
    <div className="game-details">
      <h1>GameDetails</h1>
      <div className="game-details-card">
        <div className="game-details-img">
          <img
            src="https://m.media-amazon.com/images/I/71rmY66nqoL._AC_UF1000,1000_QL80_.jpg"
            alt="{}"
          />
        </div>
        <div className="game-details-description">
          <h3>
            Name: <br />
            {game.name}
          </h3>
          <p>
            Release Year: <br />
            {game.release_year}
          </p>
          <p>
            Genre: <br />
            {game.genre}
          </p>
          <p>
            Rating: <br />
            {game.rating}
          </p>
          <p>{game.discontinued}</p>
          <p>
            Studio: <br />
            {game.game_studio}
          </p>
          <p>
            System: <br />
            {game.system}
          </p>
        </div>
        <div className="game-details-buttons">
          <Link to={`/games`}>
            <button>Back</button>
          </Link>
          <Link to={`/games/${index}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={confirmDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
