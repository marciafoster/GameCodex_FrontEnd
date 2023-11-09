import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function GameEditForm() {
  let { index } = useParams();
  let navigate = useNavigate();

  const [game, setGame] = useState({
    name: "",
    release_year: "",
    genre: "",
    rating: "",
    discontinued: false,
    game_studio: "",
    system: "",
  });

  const handleTextChange = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setGame({ ...game, discontinued: !game.discontinued });
  };

  //Update a game, Redirect to show view
  const updateGame = () => {
    fetch(`${API}/games/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate(`/games/${index}`);
      });
  };

  useEffect(() => {
    fetch(`${API}/games/${index}`)
      .then((res) => res.json())
      .then((res) => setGame(res));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGame();
  };

  return (
    <div className="Edit">
      <form className="edit-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={game.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Game"
          required
        />

        <br />

        <label htmlFor="release_year">Release Year:</label>
        <input
          id="release_year"
          value={game.release_year}
          type="number"
          onChange={handleTextChange}
          placeholder="Release Year"
          required
        />

        <br />

        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          value={game.genre}
          type="text"
          onChange={handleTextChange}
          placeholder="Game Genre"
          required
        />

        <br />

        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={game.rating}
          type="text"
          onChange={handleTextChange}
          placeholder="Game Rating"
          required
        />

        <br />

        <label htmlFor="game_studio">Game Studio:</label>
        <input
          id="game_studio"
          value={game.game_studio}
          type="text"
          onChange={handleTextChange}
          placeholder="game_studio of Game"
          required
        />

        <br />

        <label htmlFor="system">System:</label>
        <input
          id="system"
          value={game.system}
          type="text"
          onChange={handleTextChange}
          placeholder="system of Game"
          required
        />

        <br />

        <label htmlFor="discontinued">Discontinued:</label>
        <input
          id="discontinued"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={game.discontinued}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to={`/games/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
