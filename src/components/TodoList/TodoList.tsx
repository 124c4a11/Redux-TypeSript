import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect
} from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';


interface TodoListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { }


export function TodoList(props: TodoListProps): JSX.Element {
  const {
    todoes,
    isLoading,
    error,
    page,
    limit
  } = useTypedSelector((state) => state.todo);
  const { fetchTodo, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodo(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>{`Error: ${error}`}</h2>

  return (
    <>
      {
        todoes.length === 0
          ?
          <h2>No todoes</h2>
          :
          <ul {...props}>
            {todoes.map(({ id, title }) => (
              <li key={id}><b>{id}.</b> {title}</li>
            ))}
          </ul>
      }
      <div>
        {
          pages.map((pageNumber) => (
            <button
              key={pageNumber}
              style={{ borderColor: pageNumber === page ? 'tomato' : '' }}
              onClick={() => setTodoPage(pageNumber)}
            >{pageNumber}</button>
          ))
        }
      </div>
    </>
  );
}
