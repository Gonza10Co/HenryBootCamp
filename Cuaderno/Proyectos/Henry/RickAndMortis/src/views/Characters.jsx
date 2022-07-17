import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Character from "../components/Character";
import { getCharactersFromApi } from "../store/actions";

export default (props) => {
  const {
    history: { push },
  } = props; //me viene del react-router-dom
  const { characters } = useSelector((state) => state); //traigo el estado de mi store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharactersFromApi());
  }, [dispatch]);
  const handleNavigate = (id) => {
    push(`/characters/${id}`);
  };

  return (
    <main>
      {characters.map((e) => (
        <Character key={e.id} character={e} navigate={handleNavigate} />
      ))}
    </main>
  );
};
