import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../providers/useAuth'

export function RequireAuth({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  return user
    ? children
    : <Navigate to="/login" state={{ from: location }} replace />
}
