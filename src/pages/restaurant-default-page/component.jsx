import { Navigate, Outlet } from 'react-router-dom';

export const RestaurantDefaultPage = ({defaultTab}) => (
  <div>
    <Navigate to={defaultTab} />
    <Outlet />
  </div>
);

