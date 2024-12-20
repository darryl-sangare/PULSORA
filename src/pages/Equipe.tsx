import { useEffect, useState } from "react";

type Position = "GK" | "DEF" | "MF" | "FW";
type Status = "Suspendu" | "Blessé" | "Opérationnel" | "Inconnu";

export interface TeamInterface {
  id: number;
  name: string;
  wins: number;
  loses: number;
  players: [];
  homeGames: [];
  awayGames: [];
}

export interface PlayerInterface {
  id: number;
  firstname: string;
  lastname: string;
  number: number;
  position: Position;
  status: Status;
  teamId: number;
  incidents: [];
}

export default function Equipe() {
  const [teamsData, setTeamsData] = useState<TeamInterface[] | null>(null);
  const [playersData, setPlayersData] = useState<PlayerInterface[] | null>(
    null
  );

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

    const fetchPlayersDatas = async () => {
      try {
        const res = await fetch("http://localhost:3000/players");
        if (!res.ok) {
          throw new Error(
            `Erreur dans la récupération des données des matchs : ${res.status}`
          );
        }

        const datas = await res.json();
        setPlayersData(datas.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchTeamsDatas();
    fetchPlayersDatas();
  }, []);
  return (
    <>
      <p>equipe works!</p>
    </>
  );
}
