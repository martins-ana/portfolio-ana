import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PAGES } from './constants';

const router = createBrowserRouter([
  {
    path: PAGES.HOME,
    element: <div>Hello world!</div>,
  },
  {
    path: PAGES.ABOUT,
    element: <div>About page</div>,
  },
  {
    path: PAGES.PROJECTS,
    element: <div>Projects page</div>,
  },
  {
    path: PAGES.CONTACT,
    element: <div>Contact page</div>,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
