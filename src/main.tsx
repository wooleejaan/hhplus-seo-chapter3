import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import {
  LinkForFavicon,
  MetaForOpenGraph,
  MetaForTwitter,
} from "./meta/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import ErrorPage from "./pages/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);

const defaultContents = () => (
  <HelmetProvider>
    <LinkForFavicon />
    <MetaForOpenGraph />
    <MetaForTwitter />
    <RouterProvider router={router} />
  </HelmetProvider>
);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, defaultContents());
} else root.render(defaultContents());
