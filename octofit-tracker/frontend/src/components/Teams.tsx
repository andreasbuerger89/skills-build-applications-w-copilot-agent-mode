import { useEffect, useState } from 'react';
import { apiBase, normalizeResponse } from '../lib/api.js';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/api/teams/`)
      .then((response) => response.json())
      .then((json) => setTeams(normalizeResponse(json)))
      .catch(console.error);
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team._id || team.id}>
            {team.name} — {team.members?.length ?? team.members ?? 0} members
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Teams;
