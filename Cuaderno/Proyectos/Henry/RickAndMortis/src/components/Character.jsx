import {MdOutlineNavigateNext} from 'react-icons/md'

export default (props) => {
  const { character, navigate } = props;
  const { id, name, image } = character;
  return (
    <article>
      <img src={image} alt=""></img>
      <span>{name}</span>
      <button onClick={()=> navigate(id)}><MdOutlineNavigateNext/></button>
    </article>
  );
};
