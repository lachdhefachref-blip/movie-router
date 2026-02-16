import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
