import { Link, Outlet } from "react-router-dom";

export default function Creer() {
  return (
    <>
      <div>
        <ul>
          <Link to="/creer/article">Poster un article</Link>
          <Link to="/creer/equipe">Créer une équipe</Link>
          <Link to="/creer/joueur">Créer un joueur</Link>
          <Outlet />
        </ul>
      </div>
    </>
  );
}
