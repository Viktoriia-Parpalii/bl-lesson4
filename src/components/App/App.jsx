import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
// import { useState } from 'react';
// import { useEffect } from 'react';
import { useLocalStorage } from 'hooks';

export const App = () => {
  // const [todos, setTodos] = useState(
  //   () => JSON.parse(localStorage.getItem('todos')) ?? []
  // );

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);
  const [value, setValue] = useLocalStorage('todos', []);

  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    setValue(prevState => [...prevState, todo]);
  };

  const handleSubmit = data => {
    addTodo(data);
  };

  const deleteTodo = id => {
    setValue(prevState => prevState.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {value.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {value.length > 0 &&
              value.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
