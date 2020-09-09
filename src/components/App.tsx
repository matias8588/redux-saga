import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      test
    </Container>
  </>
);

export default App;
