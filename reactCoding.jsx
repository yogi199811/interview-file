
// Q2. Build a React component that:

// displays users
// filters by search text
// updates results with 300ms debounce
// shows “No users found”




import { useState, useEffect } from "react";

const usersData = [
  { id: 1, name: "Yogesh" },
  { id: 2, name: "Aman" },
  { id: 3, name: "Rohit" },
  { id: 4, name: "Suresh" }
];

export default function UserSearch() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  // ✅ Debounce logic (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // ✅ Filtering logic
  useEffect(() => {
    const result = usersData.filter(user =>
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setFilteredUsers(result);
  }, [debouncedSearch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Search</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}