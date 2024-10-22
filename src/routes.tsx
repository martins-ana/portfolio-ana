import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'src/pages/home';
import { ROUTES } from 'src/constants/routes';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home></Home>,
  },

  {
    path: ROUTES.HOME_PAGE,
    element: <Home></Home>,
  },

  {
    path: ROUTES.ABOUT_ME,
    element: <Home></Home>,
  },

  {
    path: ROUTES.PROJECTS,
    element: <Home></Home>,
  },

  {
    path: ROUTES.CONTACT,
    element: <Home></Home>,
  },
]);

function Routes() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Routes;
