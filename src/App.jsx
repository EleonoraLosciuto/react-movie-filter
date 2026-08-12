import { useState } from 'react'
import './App.css'

const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filter, setFilter] = useState("");

  const genreSet = [...new Set(movies.map((movie) => movie.genre))];

  const handleFilterInput = (e) => {
    setFilter(e.target.value),
      console.log(`Film Ricercato: ${e.target.value}`)
  };

  const handleGenreSelect = (e) => {
    setSelectedGenre(e.target.value),
      console.log(`Genere Selezionato: ${e.target.value}`)
  };

  return (
    <>
      <header>
        <div className="filterBar">
          <label>Cerca film: </label>
          <input type="text" onChange={handleFilterInput} value={filter} />

          <label>Seleziona Genere Film: </label>
          <select name="selectGenre" value={selectedGenre} onChange={handleGenreSelect}>
            <option value="none"></option>
            {
              genreSet.map((genre, index) =>
                <option key={index} value={genre}>{genre}</option>
              )

            }
          </select>
        </div>
      </header>

      {movies.map((movie, index) => (
        <div className='movie-card' key={index}>
          <p className='movie-title'>{movie.title}</p>
          <p className='movie-genre'>{movie.genre}</p>
        </div>
      )
      )}
    </>
  )
};

export default App
