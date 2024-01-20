import React from 'react';
import { lazy, Suspense } from 'react'; //동적 렌더링을 위한 컴포넌트
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import BaseLayout from 'src/layouts';

export const IndexPage = lazy(() => import('../pages/app'));
export const AttendancePage = lazy(() => import('../pages/attendance'));
export const EventPage = lazy(() => import('../pages/event'));
export const LoginPage = lazy(() => import('../pages/login'));
export const FraudPage = lazy(() => import('../pages/fraud'));
export const Wishlist = lazy(() => import('../pages/wishlist'));
export const NotFoundPage = lazy(() => import('../pages/notfound'));

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <BaseLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </BaseLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'attendance', element: <AttendancePage /> },
        { path: 'event', element: <EventPage /> },
        { path: 'fraud', element: <FraudPage /> },
        { path: 'wishlist', element: <Wishlist /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <NotFoundPage />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
};

export default Router;
