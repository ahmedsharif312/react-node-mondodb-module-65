import React from 'react';

const AddUsers = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };

        // pass on server side

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
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
            <h3>Users Add</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Name' />
                <input type="email" name="email" placeholder='Email' />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUsers;