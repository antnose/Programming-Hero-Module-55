import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/Users/Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // element: <Users />,
  },
  {
    path: "users",
    element: <Users />,
    loader: () => fetch("http://localhost:3001/users"),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
