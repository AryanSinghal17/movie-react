import React, { useState } from "react";

function App() {
  const movies = [
    { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
    { title: "The Godfather", genre: "Crime", year: 1972 },
    { title: "The Dark Knight", genre: "Action", year: 2008 },
    { title: "12 Angry Men", genre: "Drama", year: 1957 },
    { title: "Schindler's List", genre: "Drama", year: 1993 },
    {
      title: "The Lord of the Rings: The Return of the King",
      genre: "Fantasy",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", genre: "Western", year: 1966 },
    { title: "Forrest Gump", genre: "Drama", year: 1994 },
    { title: "Inception", genre: "Science Fiction", year: 2010 },
    { title: "The Matrix", genre: "Science Fiction", year: 1999 },
    { title: "The Silence of the Lambs", genre: "Thriller", year: 1991 },
    { title: "Saving Private Ryan", genre: "War", year: 1998 },
    { title: "Jurassic Park", genre: "Science Fiction", year: 1993 },
    {
      title: "Terminator 2: Judgment Day",
      genre: "Science Fiction",
      year: 1991,
    },
    { title: "The Lion King", genre: "Animation", year: 1994 },
  ];

  const genres = [
    "All",
    "Drama",
    "Crime",
    "Action",
    "Fantasy",
    "Western",
    "Science Fiction",
    "Thriller",
    "War",
    "Animation",
  ];

  const [selectedGenre, setSelectedGenre] = useState("All");
  
  function filterMovies(){
    
    if(selectedGenre === "All"){
      return movies;
    }else{
      return movies.filter((iteam)=>(
       iteam.genre === selectedGenre  
      ))
    }
  }

const filteredMovies = filterMovies();

  return (
    <>
      <h1>Top 15 Movies of all time</h1>

      <div>
        <strong>Filter by Genre</strong>
        {genres.map((g, index) => (
          <button key={index}
          onClick={() => setSelectedGenre(g)}
          >{g}</button>
        ))}
      </div>
      
      <table>
        <tbody>
          <td>Title</td>
          <td>Genre</td>
          <td>Year</td>
          {filteredMovies.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
