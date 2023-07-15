import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./component/Main/Main";
import Home from "./Pages/Home/Home";
import AddJob from "./Pages/AddJob";
import EditJobs from "./Pages/EditJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addjob",
        element: <AddJob></AddJob>,
      },
      {
        path: "editjob/:id",
        element: <EditJobs></EditJobs>,
        loader: ({ params }) => fetch(`http://localhost:9000/jobs/?id=${params.id}`),
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
