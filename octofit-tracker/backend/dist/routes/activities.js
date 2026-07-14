import express from 'express';
import Activity from '../models/activity.js';
const router = express.Router();
router.get('/', async (_req, res) => {
    const activities = await Activity.find().populate('user', 'name email').lean();
    res.json({ data: activities });
});
router.post('/', async (req, res) => {
    const newActivity = await Activity.create(req.body);
    res.status(201).json({ data: newActivity });
});
export default router;
