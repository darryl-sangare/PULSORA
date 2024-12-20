import { Link, Outlet } from "react-router-dom";

export default function Gerer() {
  return (
    <>
      <div>
        <ul>
          <Link to="/gerer/article">Poster un article</Link>
          <Link to="/gerer/equipe">Créer une équipe</Link>
          <Link to="/gerer/joueur">Créer un joueur</Link>
          <Outlet />
        </ul>
      </div>
    </>
  );
}
