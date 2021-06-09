import './App.css';
import { useState } from 'react'

import UserContainer from './components/UserContainer'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import UserDetails from './components/UserDetails'

import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  const [userList, setUserList] = useState([])
  const [search, setSearch] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  const handleReset = () => {
    setSearch('')
  }
  const filteredUsers = userList.filter(user =>
    user.name.toLowerCase().includes(search.toLocaleLowerCase()))

  const specificUser = userList.filter(user =>
    user.id===(selectedUser))

  console.log(specificUser)

  return (
    <Router>
        <UserContainer setUserList={setUserList}/>
        <Route exact path="/users">
            <UserSearch handleChange={handleChange} handleReset={handleReset} className="search-box"/>
            <UserList userList={filteredUsers} search={search} setSelectedUser={setSelectedUser}/>
        </Route>
        <Route exact path='/user-profile'>
            <UserDetails specificUser={specificUser}/>
        </Route>
    </Router>
  );
}

export default App;
