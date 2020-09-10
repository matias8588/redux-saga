import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { usersActions } from '../redux/actions/users.action';
import UserList from './UserList';
import NewUserForm from './NewUserForm';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersActions.getUsersRequest());
  });

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <NewUserForm />
        <UserList />
      </Container>
    </>
  );
};

export default App;
