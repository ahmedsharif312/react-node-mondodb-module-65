import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleDeleteUser = id => {
        const process = window.confirm('You are confirm to delete');
        if (process) {
            console.log('deleted', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining)
                        console.log('deleted');
                    }
                    console.log(data);
                })
        }
    }

    return (
        <div>
            <h1>Home Page</h1>

            <ul>
                {
                    users.map(user => <li
                        key={user._id}>
                        {user.name}:::::
                        {user.email}
                        <Link to={`/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                    </li>)
                }

            </ul>
        </div>
    );
};

export default Home;