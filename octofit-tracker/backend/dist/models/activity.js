import mongoose from 'mongoose';
const activitySchema = new mongoose.Schema({
    type: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    distanceKm: { type: Number, required: true },
    durationMinutes: { type: Number, required: true },
    timestamp: { type: Date, default: () => new Date() }
});
const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export default Activity;
