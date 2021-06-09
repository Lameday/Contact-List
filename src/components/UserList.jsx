import React from 'react'

import UserCard from './UserCard'
import Grid from '@material-ui/core/Grid';



export default function UserList({ userList, setSelectedUser }) {

    return (
        <Grid container justify="center" spacing={2}>
            {userList.map(user => <UserCard key={user.id} user={user} setSelectedUser={setSelectedUser}/>)}
        </Grid>
    )
}
