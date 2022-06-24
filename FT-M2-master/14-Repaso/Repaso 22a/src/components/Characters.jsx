import { MdNavigateNext } from "react-icons/md";

export default function Character(props) {
  const { character, navigate } = props;
  const { id, name, image } = character;
  return (
    <article>
      <img src={image} alt="" />
      <span>{name}</span>
      <button onClick={() => navigate(id)}>
        <MdNavigateNext />
      </button>
    </article>
  );
}
//