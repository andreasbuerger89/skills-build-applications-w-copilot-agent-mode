import express from 'express';
import Workout from '../models/workout.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  const workouts = await Workout.find().lean();
  res.json({ data: workouts });
});

router.post('/', async (req, res) => {
  const newWorkout = await Workout.create(req.body);
  res.status(201).json({ data: newWorkout });
});

export default router;
