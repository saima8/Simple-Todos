import {Meteor} from 'meteor/meteor'
import React, {useState} from 'react';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    }

    return (
        <form onSubmit={submit} className="login-form">
            <label htmlFor="username">Username</label>
            <input type="text"
                placeholder="Your username"
                name="username"
                required onChange={e => setUsername(e.target.value)}
            />
            <label htmlFor="password">Username</label>
            <input type="text"
                placeholder="Your password"
                name="password"
                required onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">Log in</button>
            
        </form>
    )
}