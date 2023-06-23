import { createBrowserRouter } from "react-router-dom";

// import { getAllArticles, getOneArticles } from "../api";

import Root from "./Root";

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import EmployeesList from "../pages/EmployeesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => {
        //   return getAllArticles();
        // },
      },
      {
        path: "/employees-list",
        element: <EmployeesList />,
        // loader: ({ params }) => {
        //   return getOneArticles(params.id);
        // },
      },
    ],
  },
]);

export default router;
