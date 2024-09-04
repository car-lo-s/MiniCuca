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
  receitaimg: string;
  tipo:string;
}

export const PaginaDestino = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tipo = queryParams.get("tipo");
    const [dado,setDado] = useState<receita[]>([])
    
    
    useEffect(()=>{
        axios.get("https://localhost:44378/api/Receitas").then((response)=>{
            setDado(response.data)
            
        })
    },[])

    

  return (
    <section className="paginaDestino">
        <Link to={"/"}>
      <div className="voltar">
          <img src={voltar} alt="" />
      </div></Link>
      <h1>{tipo}</h1>
      {dado &&
        dado.map((a:receita)=>(
            a.tipo == tipo? 
            <div className="cardDestino">
               <div> <img src={a.receitaimg} alt="" /> </div>
               <div>
                <h1>{a.receitaName}</h1>
                <p>{a.ingredientes}</p>
                <p>{a.instrucao}</p>
                </div> 
            </div> : <div> </div>
        ))
      }
    </section>
  );
};
