const API_URL = "http://localhost:5000/users";

export const fetchUsers = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const addUser = async (user) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    return res.json();
};
