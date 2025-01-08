import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import UserAction from './pages/UserAction';
function App() {
  return (
    <Router>
      <Routes>
        {/* Define your route here */}
        <Route path="/" element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="/users/:userId" element={<UserAction />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
