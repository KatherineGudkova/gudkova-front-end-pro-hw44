import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div class="div-box">
            <h1>USERS</h1>
            <ol>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <Link to={`/albums?userId=${user.id}`}>
                            <button>ALBUM</button>
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default UsersPage;
