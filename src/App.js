import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Login, Home, Users, About } from './views';
import { RequireAuth } from './components'
import { AuthProvider } from './providers/useAuth';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/users"
        element={(
          <RequireAuth>
            <Users />
          </RequireAuth>
        )}
      />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <div>

        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
