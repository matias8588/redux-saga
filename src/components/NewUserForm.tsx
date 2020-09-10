import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme: Theme) => createStyles({
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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField id="standard-basic" label="Standard" />
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" size="small" className={classes.button} startIcon={<SaveIcon />}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default NewUserForm;
