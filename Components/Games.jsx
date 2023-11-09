import { useState, useEffect } from "react";
import Game from "./Game";


const API = import.meta.env.VITE_API_URL;

export default function Games() {
  const [games, setGames] = useState([]);

  const fetchData = async () => {
    try {
      fetch(`${API}/Games`)
        .then((res) => res.json())
        .then((res) => {
          setGames(res);
        });
    } catch (error) {
      return error;
    }
  };

  // Displaying all games
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="game-container">
      <h1>Games</h1>
      {games.map((game) => {
        return <Game key={game.id} game={game} />;
      })}
    </div>
  );
}
