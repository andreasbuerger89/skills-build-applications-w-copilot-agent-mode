import express from 'express';
import Team from '../models/team.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  const teams = await Team.find().populate('members', 'name email role').lean();
  res.json({ data: teams });
});

router.post('/', async (req, res) => {
  const newTeam = await Team.create(req.body);
  res.status(201).json({ data: newTeam });
});

export default router;
