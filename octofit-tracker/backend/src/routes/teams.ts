import express from 'express';

const router = express.Router();

const teams = [
  { id: '1', name: 'Team OctoFit', members: 8 },
  { id: '2', name: 'Hydra Squad', members: 5 }
];

router.get('/', (_req, res) => {
  res.json({ data: teams });
});

router.post('/', (req, res) => {
  const newTeam = {
    id: String(teams.length + 1),
    ...req.body
  };
  teams.push(newTeam);
  res.status(201).json({ data: newTeam });
});

export default router;
