import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import JobDtls from "./pages/JobDtls";
import AppliedJobs from "./pages/AppliedJobs";
import ErrorPage from "./pages/ErrorPage";
import Statistics from "./pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />, errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/statistics", element: <Statistics /> },
      { loader: () => fetch('../public/jobs.json'), path: "/applied-jobs", element: <AppliedJobs /> },
      { path: "/blog", element: <Blog /> },
      // { loader: (object) => fetch(`https://raw.githubusercontent.com/mdnazmul42726/react-knowledge-cafe/main/public/blog.json/${object.params.id}`), path: "/job/:id", element: <JobDtls /> }
      { loader: () => fetch('../public/jobs.json'), path: "job/:id", element: <JobDtls /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);