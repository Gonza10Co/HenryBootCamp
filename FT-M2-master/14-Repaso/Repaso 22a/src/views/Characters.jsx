import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import Character from "../components/Characters";
import store from "../store";
import { getCharactersFromAPI } from "../store/actions";

export default function Characters(props) {
  // const { history } = props;
  // const { push } = history;
  const {
    history: { push },
  } = props;
  const { characters } = useSelector((state) => state);
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCharactersFromAPI())
  },[dispatch])
  
  const handleNavigate = (id) => push(`/characters/${id}`);
  
  return (
    <main>
      {characters.map((ch) => (
        <Character
          key={ch.id}
          character={ch}
          navigate={handleNavigate}
        />
      ))}
    </main>
  );
}
