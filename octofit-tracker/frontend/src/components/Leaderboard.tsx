import { useEffect, useState } from 'react';
import { apiBase, normalizeResponse } from '../lib/api.js';

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/api/leaderboard/`)
      .then((response) => response.json())
      .then((json) => setEntries(normalizeResponse(json)))
      .catch(console.error);
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      <ol>
        {entries.map((entry) => (
          <li key={entry._id || `${entry.rank}-${entry.user?.id || entry.user?._id}`}>
            {entry.rank}. {entry.user?.name || 'Unknown'} — {entry.points} pts
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Leaderboard;
