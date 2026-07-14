import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <h1>OctoFit Tracker</h1>
          <p>Modern multi-tier fitness tracker UI powered by React 19, Vite, and Codespaces-aware API routing.</p>
          <nav className="site-nav">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/workouts">Workouts</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<div>Select a section to view OctoFit Tracker data.</div>} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
