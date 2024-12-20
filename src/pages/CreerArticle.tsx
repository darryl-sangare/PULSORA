import { FormEvent, useState } from "react";
import axios from "axios";

export default function CreerArticle() {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const empty = title.trim() === "" || body.trim() === "";

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log(title);
    console.log(body);
    try {
      axios.post("http://localhost:3000", { title, body });
      setMessage("Article créé avec succès");
    } catch (e) {
      setMessage("Erreur lors de la création de l'article");
    }
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <input
          className="border-4"
          type="text"
          placeholder="Titre de l'article"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoComplete="off"
        />
        <textarea
          className="border-4"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></textarea>
        <button
          type="submit"
          disabled={!empty}
          className={`${!empty ? "hover:bg-red-400 cursor-pointer" : null}`}
        >
          Créer
        </button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
