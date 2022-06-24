import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetail() {
  const { id } = useParams();
  const [state, setState] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => setState(response.data));
  }, [id]);

  return (
    <div>
      <img src={state.image} alt="" />
      <h1>{state.name}</h1>
    </div>
  )
}
