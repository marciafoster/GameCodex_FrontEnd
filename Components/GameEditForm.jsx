import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function GameEditForm() {
  let { index } = useParams();
  let navigate = useNavigate();

  const [game, setGame] = useState({
    name: "",
    release_year: 0,
    genre: "",
    rating: "",
    discontinued: false,
    game_studio: "",
    system: "",
  });



  return (
    <div>
      <h1>GameEditForm</h1>
    </div>
  );
}
