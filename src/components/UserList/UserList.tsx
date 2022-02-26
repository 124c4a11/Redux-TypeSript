import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect
} from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';


interface UserListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { }


export function UserList(props: UserListProps): JSX.Element {
  const { users, isLoading, error } = useTypedSelector((state) => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>{`Error: ${error}`}</h2>;

  return (
    <>
      {
        users.length === 0
          ?
          <h2>No users</h2>
          :
          <ul {...props}>
            {users.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
      }
    </>
  );
}
