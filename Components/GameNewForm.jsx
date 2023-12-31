
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../src/Styles/GameNewForm.css"

const API = import.meta.env.VITE_API_URL;

function GameNewForm() {
  
  const navigate = useNavigate();
  const [game, setGame] = useState({
    name: "",
    release_year: "",
    genre: "",
    rating: "",
    discontinued: false,
    game_studio: "",
    system: "",
  });

  const addGame = () => {
    const gameData = {
      name: game.name,
      release_year: game.release_year,
      genre: game.genre,
      rating: game.rating,
      discontinued: game.discontinued,
      game_studio: game.game_studio,
      system: game.system,
    };
    try {
      fetch(`${API}/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameData)
      })
        .then(res => res.json())
        .then(() => navigate('/games'))
    } catch (error) {
      return error
    }
  };

  const handleTextChange = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setGame({ ...game, discontinued: !game.discontinued });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGame();
  };

  return (
    <div className="NewFormContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={game.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Game"
          required
        />

        <div className="FormField">
        <label htmlFor="release_year">Release Year:</label>
        <input
          id="release_year"
          value={game.release_year}
          type="number"
          onChange={handleTextChange}
          placeholder="Release Year"
          required
        />
        </div>

        <div className="FormField">
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          value={game.genre}
          type="text"
          onChange={handleTextChange}
          placeholder="Genre"
        />
        </div>

        <div className="FormField">
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={game.rating}
          type="text"
          onChange={handleTextChange}
          placeholder="Rating"
          required
        />
        </div>

        <div className="FormField">
        <label htmlFor="game_studio">Game Studio:</label>
        <input
          id="game_studio"
          value={game.game_studio}
          type="text"
          onChange={handleTextChange}
          placeholder="Game Studio"
        />
        </div>

        <div className="FormField">
        <label htmlFor="system">System:</label>
        <input
          id="system"
          value={game.system}
          type="text"
          onChange={handleTextChange}
          placeholder="System"
        />
        </div>

        <div className="FormField">
        <label htmlFor="discontinued">Discontinued:</label>
        <input
          id="discontinued"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={game.discontinued}
        />
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to={`/games`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default GameNewForm;
