import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import "./Detail.scss";

export default () => {
  const { id } = useParams(); //me traigo el id del request
  const [state, setState] = useState();
  const [input, setInput] = useState({ text: "" });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ input });
    setInput({ text: "" });
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => setState(response.data));
  }, [id]);

  // $(document).ready(function () {
  //   let animeCards = $(".anime-card");
  //   let defaultBg = $(".anime-card.active").css("background-image");
  //   $(".wrapper").css({ "background-image": defaultBg });

  //   animeCards.click(function () {
  //     animeCards.removeClass("active");
  //     $(this).addClass("active");
  //     let selectedAnimeBg = $(this).css("background-image");
  //     $(".wrapper").css({ "background-image": selectedAnimeBg });
  //   });
  // });

  return (
    <div>
      {state && ( //importante por q si no shisha
        <>
          {/* <div className="wrapper">
            <div className="cards-container">
              <div className="card anime-card active">
                <div className="card-title">Death Note</div>
              </div>
              <div className="card anime-card">
                <div className="card-title">Fullmetal Alchemist</div>
              </div>
              <div className="card anime-card">
                <div className="card-title">Ghost In The Shell</div>
              </div>
              <div className="card anime-card">
                <div className="card-title">Code Geass</div>
              </div>
              <div className="card anime-card">
                <div className="card-title">Attak On Titan</div>
              </div>
            </div>
          </div> */}
          <img src={state.image} alt={state.name} />
          <h3>{state.name}</h3>
          <h5>Genero: {state.gender}</h5>
          <h5>Specie: {state.species}</h5>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <input value={input.text} onChange={handleChange} name="text" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
