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

  return (
    movies.map((movie) => (
      <div className='movie-card'>
        <p className='movie-title'>{movie.title}</p>
        <p className='movie-genre'>{movie.genre}</p>
      </div>
    )
    )
  )
};

export default App
