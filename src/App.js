import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieDetail from './pages/MovieDetail';
import Navigition from './components/Navigition';
import TvMain from './pages/TvMain'
import TvDetail from './pages/TvDetail';



function App() {
  return (
    <div className="App">
      <Navigition/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='movie' element={<Movie />}/>
          <Route path='movies/:id' element={<MovieDetail />}/>
          <Route path='tvmain' element={<TvMain />} />
          <Route path='tv/:id' element={<TvDetail />}/>
        </Routes>
    </div>
  );
}

export default App;
