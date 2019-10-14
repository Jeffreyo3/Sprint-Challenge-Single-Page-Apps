import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect

//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, []);

//   return (
//     <section className="character-list">
//       <h2>TODO: `array.map()` over your state here!</h2>
//     </section>
//   );
// }

const CharacterList = props => {
  const [characters, setCharacters] = useState({})
  useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => {
          setCharacters(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    
  }, []);

const arrayCharacters = Array.from(characters);
console.log(arrayCharacters);
  
  return (
    <div className="character-list">
      {arrayCharacters.map(movie => (
        <Link to={`/character/${movie.id}`} key={movie.id}>
          <CharacterDetails key={movie.id} movie={movie} />
        </Link>
      ))}
      
    </div>
  );
}

function CharacterDetails ({character}) {
  return (
    <Route render={(props) => 
      <CharacterCard {...props} character={character} id={character.id} />} 
    />
  );
}


export default CharacterList;