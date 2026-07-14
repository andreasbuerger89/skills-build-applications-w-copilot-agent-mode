import { useEffect, useState } from 'react';
import { apiBase, normalizeResponse } from '../lib/api.js';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/api/activities/`)
      .then((response) => response.json())
      .then((json) => setActivities(normalizeResponse(json)))
      .catch(console.error);
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity._id || activity.id}>
            {activity.type} • {activity.distanceKm} km • {activity.durationMinutes} min
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
