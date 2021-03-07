import React, { useState, useEffect } from 'react'
import { Container, ContentContainer } from './style.js';
import Character from './Character';
import RemoveButton from './RemoveButton';

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
          console.log(result.results)
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const remove = (name) => {
    setItems(items.filter((item) => item.name !== name))
    console.log('remoção', items)
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container className="App">
        {items.sort((a, b) => (a.name > b.name ) ? 1 : -1).map((item => {
          return (
            <ContentContainer>
              <Character name={item.name} color={item.eye_color} />
              <RemoveButton onClick={() => remove(item.name)} buttonText='remover' />
            </ContentContainer>
          )
        }))
        }
      </Container>
    );
  }
}
