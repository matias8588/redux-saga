import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { usersActions } from '../redux/actions/users.action';

const App: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(usersActions.getUsersRequest());
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        test
      </Container>
    </>
  );
};

export default App;
