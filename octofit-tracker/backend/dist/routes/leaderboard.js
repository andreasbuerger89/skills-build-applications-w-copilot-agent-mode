import express from 'express';
import Leaderboard from '../models/leaderboard.js';
const router = express.Router();
router.get('/', async (_req, res) => {
    const leaderboard = await Leaderboard.find().sort({ rank: 1 }).populate('user', 'name email').lean();
    res.json({ data: leaderboard });
});
export default router;
