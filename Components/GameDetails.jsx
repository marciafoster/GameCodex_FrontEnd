import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function GameDetails() {
  const [game, setGame] = useState([]);
  let { index } = useParams();

  const fetchData = async () => {
    try {
      fetch(`${API}/Games/${index}`)
        .then((res) => res.json())
        .then((res) => {
          setGame(res);
          console.log(res);
        });
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // Displaying one games
  useEffect(() => {
    fetchData();
  }, [index]);

  return (
    <div className="game-details">
      <h1>GameDetails</h1>
      <div className="game-card">
        <img
          src="https://m.media-amazon.com/images/I/71rmY66nqoL._AC_UF1000,1000_QL80_.jpg"
          alt="{}"
        />
        <h3>{game.name}</h3>
        <p>{game.release_year}</p>
        <p>{game.genre}</p>
        <p>{game.rating}</p>
        <p>{game.discontinued}</p>
        <p>{game.game_studio}</p>
        <p>{game.system}</p>
      </div>
    </div>
  );
}
