import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = [{
        id: 1,
        name: "Harsha",
        image: "https://i.stack.imgur.com/agMKZ.png?s=64&g=1",
        places: 6
    }];
    // const USER = [{}]

    return (<UserList items={USERS}/>)
}

export default Users;