import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Earth from "./routes/earth.tsx";
import IcsQuickStart from "./routes/ics-quickstart.tsx";
import Index from "./routes/index.tsx";
import Root from "./routes/root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "ics-quickstart",
        element: <IcsQuickStart />,
      },
      {
        path: "earth",
        element: <Earth />,
      },
    ],
  },
]);

// biome-ignore lint:
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
