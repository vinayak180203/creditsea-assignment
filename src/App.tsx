import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from './layout/UserLayout';
import UserPage from './pages/userPages/userDashboard';
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/user" />} />
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<Navigate to="/user/dashboard" />} />
              <Route path='dashboard' element={<UserPage />} />
            </Route>
        </Routes>
    </Router>
  );
};

export default App;
