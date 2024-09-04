import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import voltar from './assets/arrow.svg'


interface receita {
  receitaId: number;
  receitaName: string;
  ingredientes: string;
  instrucao: string;
  tempo: string;
  UserId: number;
  receitaimg:string;
}

export const PaginaReceita = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [dado, setDado] = useState<receita>();
  const [estado, setEstado] = useState<boolean>(false);
  let ingredientes: string[] | undefined;

  useEffect(() => {
    axios.get("https://localhost:44378/api/Receitas").then((response) => {
      response.data.map((a: receita) => {
        if (a.receitaId.toString() == id) {
          setDado(a);
          setEstado(true);
        }
      });
    });
  }, []);

  if (estado) {
    ingredientes = dado?.ingredientes.split(",");
  }

  return (
    <section className="paginaReceita">
      <Link to={"/"}>
      <div className="voltar">
          <img src={voltar} alt="" />
      </div></Link>
      
      <section className="DadosReceita">
        <h1>{dado?.receitaName}</h1>
        <div className="imgcomida">
          <img src={dado?.receitaimg} alt="" />
        </div>
        <div className="receita">
          <h3>Ingredientes</h3>
          {ingredientes?.map((a: string) => (
            <p> - {a}. </p>
          ))}
        </div>
        <div className="receita">
          <h3>Modo de preparo</h3>- {dado?.instrucao}
        </div>
      </section>
      <section className="comentarios">
        <h2>Comentarios</h2>
        <div>
          
        </div>
      </section>
    </section>
  );
};
