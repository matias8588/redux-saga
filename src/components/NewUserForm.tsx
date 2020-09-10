import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch } from 'react-redux';
import { usersActions } from '../redux/actions/users.action';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const NewUserForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
  });

  const handleInput = () => {
    dispatch(usersActions.createUserRequest(input));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item spacing={1}>
          <TextField id="standard-basic" label="First Name" onChange={(e) => setInput({ ...input, firstName: e.target.value })} />
        </Grid>
        <Grid item spacing={1}>
          <TextField id="standard-basic" label="Last Name" onChange={(e) => setInput({ ...input, lastName: e.target.value })} />
        </Grid>
        <Grid item spacing={1}>
          <Button variant="contained" color="primary" size="small" className={classes.button} startIcon={<SaveIcon />} onClick={handleInput}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default NewUserForm;
