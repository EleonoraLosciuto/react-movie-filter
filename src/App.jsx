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
  const [filter, setFilter] = useState("");

  const handleFilterInput = (e) => (
    setFilter(e.target.value),
    console.log(filter)
  );

  return (
    <>
      <header>
        <div className="filterBar">
          <label>Cerca film: </label>
          <input type="text" onChange={handleFilterInput} value={filter} />
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
