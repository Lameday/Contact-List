import React, { useEffect }from 'react'




export default function UserContainer({setUserList}) {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUserList(data));
    },[])

    return (
        <div>
        </div>
    )
}
