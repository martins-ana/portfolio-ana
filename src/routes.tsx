import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PAGES } from './constants';
import Home from './pages/home';
import AboutMe from './pages/about-me';

const router = createBrowserRouter([
  {
    path: PAGES.HOME,
    element: <Home />,
  },
  {
    path: PAGES.ABOUT,
    element: <AboutMe />,
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
