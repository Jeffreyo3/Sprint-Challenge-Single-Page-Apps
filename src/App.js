import React from "react";
import Header from './components/Header.js';
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from './components/CharacterList.js';
import SearchForm from './components/SearchForm.js';
import { Link, Route } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';


export default function App() {

  return (
    <main>
      <Card>
        <Header />
        <CardBody>

          <nav>
              <Link to="/">Home</Link>
              <Link to="characters">Characters</Link>
          </nav>

          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/characters" component={CharacterList} />
        </CardBody>
      </Card>
    </main>
  );
}

