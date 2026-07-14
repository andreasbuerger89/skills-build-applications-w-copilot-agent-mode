import express from 'express';

const router = express.Router();

const workouts = [
  { id: '1', title: 'Full Body Blast', durationMinutes: 45 },
  { id: '2', title: 'Core Strength', durationMinutes: 30 }
];

router.get('/', (_req, res) => {
  res.json({ data: workouts });
});

router.post('/', (req, res) => {
  const newWorkout = {
    id: String(workouts.length + 1),
    ...req.body
  };
  workouts.push(newWorkout);
  res.status(201).json({ data: newWorkout });
});

export default router;
