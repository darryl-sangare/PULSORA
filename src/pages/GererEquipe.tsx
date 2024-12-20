import { FormEvent, useEffect, useState } from "react";
import { TeamInterface } from "./Equipe";
import axios from "axios";

export default function GererEquipe() {
  const [teamsData, setTeamsData] = useState<TeamInterface[]>([]);
  const [teamName, setTeamName] = useState("");

  const [message, setMessage] = useState("");
  const isEmpty = teamName.trim() === "";
  const isTooShort = teamName.trim().length < 3;

  useEffect(() => {
    const fetchTeamsDatas = async () => {
      try {
        const res = await fetch("http://localhost:3000/teams");
        if (!res.ok) {
          throw new Error(
            `Erreur dans la récupération des données des matchs : ${res.status}`
          );
        }

        const datas = await res.json();
        setTeamsData(datas.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchTeamsDatas();
  }, []);

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (teamsData.find((item) => item.name === teamName)) {
        setMessage("Nom d'équipe déja utilisé");
        return;
      }
      axios.post("http://localhost:3000/teams", { name: teamName });
      setMessage("Equipe créée avec succès");
    } catch (e) {
      setMessage("Erreur lors de la création de l'équipe");
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <p>
          Nom de l'équipe :{" "}
          <input
            className="border-4"
            type="text"
            onChange={(e) => setTeamName(e.target.value)}
            value={teamName}
          />
        </p>
      </form>
      <button
        type="submit"
        disabled={isEmpty}
        className={`${
          isEmpty || isTooShort ? "cursor-not-allowed" : "hover:bg-red-400"
        }`}
      >
        Créer l'équipe
      </button>
      {message && <p>{message}</p>}
    </>
  );
}
