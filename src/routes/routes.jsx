import { createBrowserRouter } from "react-router-dom";
import CharactersPage from "../pages/Characters";
import FavoritesPage from "../pages/Favorites";
import ErrorPage from "../pages/Error";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/characters",
    element: <CharactersPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/favorites",
    element: <FavoritesPage />,
    errorElement: <ErrorPage />,
  },
]);
