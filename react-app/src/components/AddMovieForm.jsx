import {useState} from 'react'

const AddMovieForm = (props) => {
  const [newMovieName, setNewMovieName] = useState("");

  function handleInputChange(e) {
    setNewMovieName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(newMovieName);
    setNewMovieName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newMovieName} onChange={handleInputChange} />
      <input type="submit" value="Add new movie" />
    </form>
  );
}

export default AddMovieForm