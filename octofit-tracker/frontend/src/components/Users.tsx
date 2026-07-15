import { useEffect, useState } from 'react';
import { apiBase, normalizeResponse } from '../lib/api.js';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/api/users/`)
      .then((response) => response.json())
      .then((json) => setUsers(normalizeResponse(json)))
      .catch(console.error);
  }, []);

  return (
    <section>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id || user.id}>{user.name} ({user.role})</li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
