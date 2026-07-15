import mongoose from 'mongoose';
import User from '../models/user.js';
import Team from '../models/team.js';
import Activity from '../models/activity.js';
import Leaderboard from '../models/leaderboard.js';
import Workout from '../models/workout.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            Leaderboard.deleteMany({}),
            Workout.deleteMany({})
        ]);
        const users = await User.create([
            { name: 'Alex Mercer', email: 'alex.mercer@example.com', role: 'member' },
            { name: 'Jordan Lee', email: 'jordan.lee@example.com', role: 'coach' },
            { name: 'Sam Patel', email: 'sam.patel@example.com', role: 'member' }
        ]);
        const teams = await Team.create([
            { name: 'OctoFit All-Stars', members: [users[0]._id, users[1]._id] },
            { name: 'Hydra Hustlers', members: [users[2]._id] }
        ]);
        const activities = await Activity.create([
            { type: 'running', user: users[0]._id, distanceKm: 8.5, durationMinutes: 52 },
            { type: 'cycling', user: users[1]._id, distanceKm: 20, durationMinutes: 70 },
            { type: 'swimming', user: users[2]._id, distanceKm: 1.2, durationMinutes: 35 }
        ]);
        const leaderboard = await Leaderboard.create([
            { rank: 1, user: users[0]._id, points: 1590 },
            { rank: 2, user: users[1]._id, points: 1450 },
            { rank: 3, user: users[2]._id, points: 1320 }
        ]);
        const workouts = await Workout.create([
            { title: 'Morning Strength Circuit', durationMinutes: 45, difficulty: 'intermediate' },
            { title: 'Cardio Endurance Builder', durationMinutes: 35, difficulty: 'beginner' },
            { title: 'Full Body HIIT Blast', durationMinutes: 25, difficulty: 'advanced' }
        ]);
        console.log('Seed the octofit_db database with test data');
        console.log({ users: users.length, teams: teams.length, activities: activities.length, leaderboard: leaderboard.length, workouts: workouts.length });
        await mongoose.disconnect();
        console.log('Database seeding complete');
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
