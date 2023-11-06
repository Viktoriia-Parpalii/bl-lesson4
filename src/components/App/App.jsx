import { Container, Header, SearchForm, Section, Text } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsloading, selectTodos } from 'redux/selectors';
import TodoList from 'components/TodoList/TodoList';
import { useEffect } from 'react';
import { fetchTodos } from 'redux/operations';

export const App = () => {
  const dispath = useDispatch();
  const todos = useSelector(selectTodos);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispath(fetchTodos());
  }, [dispath]);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          {isLoading && <Text textAlign="center">Loading ... </Text>}
          {error && <Text textAlign="center">{error}</Text>}

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
