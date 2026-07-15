import { useEffect, useState } from 'react';
import { apiBase, normalizeResponse } from '../lib/api.js';

// Example endpoint used in Codespaces: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/
function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/api/workouts/`)
      .then((response) => response.json())
      .then((json) => setWorkouts(normalizeResponse(json)))
      .catch(console.error);
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id || workout.id}>
            {workout.title} — {workout.durationMinutes} min ({workout.difficulty})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Workouts;
