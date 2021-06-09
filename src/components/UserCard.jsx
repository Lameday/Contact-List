import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root: {
      minWidth: 300,
      maxWidth: 300,
      margin: 20
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function UserCard({ user, setSelectedUser }) {
    const classes = useStyles();
    const handleClick = () => {
        setSelectedUser(user.id)
    }

    return (
        <Card className={classes.root} onClick={handleClick}>
            <Link to='user-profile'>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {user.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {user.email}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {user.address.city}
                        <br />
                        {user.address.street}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    )
}
