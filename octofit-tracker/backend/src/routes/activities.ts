import express from 'express';

const router = express.Router();

const activities = [
  { id: '1', type: 'running', distanceKm: 5, durationMinutes: 28 },
  { id: '2', type: 'cycling', distanceKm: 12, durationMinutes: 45 }
];

router.get('/', (_req, res) => {
  res.json({ data: activities });
});

router.post('/', (req, res) => {
  const newActivity = {
    id: String(activities.length + 1),
    ...req.body
  };
  activities.push(newActivity);
  res.status(201).json({ data: newActivity });
});

export default router;
