import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./Login";
import Browse from "./Browse";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ],
  { basename: "/NetflixGPT" }
);

const Body = () => (
  <div>
    <RouterProvider router={appRouter} />
  </div>
);

export default Body;
