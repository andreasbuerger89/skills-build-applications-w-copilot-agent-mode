import express from 'express';

const router = express.Router();

const users = [
  { id: '1', name: 'Alex', role: 'member' },
  { id: '2', name: 'Jordan', role: 'coach' }
];

router.get('/', (_req, res) => {
  res.json({ data: users });
});

router.post('/', (req, res) => {
  const newUser = {
    id: String(users.length + 1),
    ...req.body
  };
  users.push(newUser);
  res.status(201).json({ data: newUser });
});

export default router;
