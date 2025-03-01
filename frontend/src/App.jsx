import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Adjust the URL to match your server

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch initial users
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));

        // Listen for real-time database updates
        socket.on("databaseUpdate", (change) => {
            console.log("Database Change Received:", change);
            // Refetch data when change happens (or update state dynamically)
            fetch("http://localhost:5000/users")
                .then((res) => res.json())
                .then((data) => setUsers(data));
        });

        return () => socket.off("databaseUpdate"); // Cleanup listener on unmount
    }, []);

    return (
        <div>
            <h1>Real-Time User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
