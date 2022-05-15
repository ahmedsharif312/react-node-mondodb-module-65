import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updateUser = { name, email };

        // pass on server side
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                alert("Success")
                event.target.reset()
            })


    }

    return (
        <div>
            <h2>User Updating: {id}</h2>

            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' />
                <input type="email" name="email" placeholder='Email' />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default UpdateUser;