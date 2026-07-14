import express from 'express';

const router = express.Router();

const leaderboard = [
  { rank: 1, user: 'Alex', points: 1200 },
  { rank: 2, user: 'Jordan', points: 1100 }
];

router.get('/', (_req, res) => {
  res.json({ data: leaderboard });
});

export default router;
