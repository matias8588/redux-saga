import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
 List, Grid, Typography, ListItemAvatar, Avatar, ListItemSecondaryAction, ListItem, ListItemText, IconButton 
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import Person from '@material-ui/icons/Person';
import axios from 'axios';
import { usersActions } from '../redux/actions/users.action';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

interface RootState {
  users: {
    list: Array<{
      firstName: string;
      lastName: string;
      id: number;
    }>;
  };
}
const selectUsers = (state: RootState) => state.users.list;

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch(usersActions.deleteUserRequest(id));
  };
  const users = useSelector(selectUsers);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Users List
        </Typography>

        <div className={classes.demo}>
          <List>
            {users
              && users.map((user) => (
                <ListItem key={user.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={`${user.firstName} ${user.lastName}`} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(user.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>
        </div>
      </Grid>
    </div>
  );
};

export default UserList;
