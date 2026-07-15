import express from 'express';
import User from '../models/user.js';
const router = express.Router();
router.get('/', async (_req, res) => {
    const users = await User.find().lean();
    res.json({ data: users });
});
router.post('/', async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).json({ data: newUser });
});
export default router;
