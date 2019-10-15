import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import SearchForm from './SearchForm.js';

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
  const [characters, setCharacters] = useState([])
  useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => {
          console.log(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    
  }, []);

  // const arrayCharacters = Array.from(characters);
  // console.log(arrayCharacters);
  
  return (
    <section className="character-list">
      <SearchForm />
      {characters.map(character => {
        return (
          <div className="character-results">
            <CharacterCard
              key={character.id}
              name={character.name}
              species={character.species}
              status={character.status}
              gender={character.gender}
              image={character.image}
              location={character.location.name}
              origin={character.origin.name}
            />
          </div>
            );
          }
        )  
      }
    </section>
  );
}


export default CharacterList;