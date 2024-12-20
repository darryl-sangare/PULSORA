import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Saison from "./pages/Saison";
import Equipe from "./pages/Equipe";
import Contact from "./pages/Contact";
import GenerateGame from "./pages/GenerateGame";
import Creer from "./pages/Creer";
import CreerArticle from "./pages/CreerArticle";
import CreerJoueur from "./pages/CreerJoueur";
import CreerEquipe from "./pages/CreerEquipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "saison",
        element: <Saison />,
      },
      {
        path: "equipe",
        element: <Equipe />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "generer-match",
        element: <GenerateGame />,
      },
      {
        path: "creer/",
        element: <Creer />,
        children: [
          {
            path: "article",
            element: <CreerArticle />,
          },
          {
            path: "joueur",
            element: <CreerJoueur />,
          },
          {
            path: "equipe",
            element: <CreerEquipe />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
