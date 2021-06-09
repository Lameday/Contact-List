import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

export default function UserDetails({specificUser}) {
    const classes = useStyles();

    return (
        <div className="search-box">
        <Card className={classes.root} >
            <CardContent>
                <Typography variant="h5" component="h2">
                    {specificUser[0].name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {specificUser[0].email}
                </Typography>
                <Typography variant="body2" component="p">
                    {specificUser[0].address.city}
                    <br />
                    {specificUser[0].address.zipcode}
                    <br />
                    {specificUser[0].address.street}
                    <br />
                    {specificUser[0].address.suite}
                    <br />
                    {specificUser[0].phone}
                    <br />
                    {specificUser[0].website}
                    <br />
                    {specificUser[0].company.name}
                    <br />
                    {specificUser[0].company.catchPhrase}
                </Typography>
            </CardContent>
        </Card>
    </div>
    )
}
