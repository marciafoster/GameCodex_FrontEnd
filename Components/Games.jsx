import { useState, useEffect } from "react";

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
      {games.map((game)=>(
        <div className="game-card" key={game.id}>
          <img src="" alt="" />
          <h3>{game.name}</h3>
          <p>{game.release_year}</p>
          <p>{game.genre}</p>
          <p>{game.rating}</p>
          <p>{game.discontinued}</p>
          <p>{game.game_studio}</p>
          <p>{game.system}</p>
        </div>
      ))}
    </div>
  );
}
