import lupa from "./assets/search.svg";
import pao from "./assets/pao1.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

interface receita {
  receitaId: number;
  receitaName: string;
  ingredientes: string;
  instrucao: string;
  tempo: string;
  UserId: number;
  receitaimg:string;
}

export const Inicial = () => {
  const [pesquisa, setPesquisa] = useState<string>();
  const [dado, setDado] = useState<receita[]>([]);
  const [idpagina, setIdpagina] = useState<number>();
  const [destaque, setDestaque] = useState<boolean>(true);
  const [pesquisavel, setPesquisavel] = useState<boolean>(false);
  const [menu,setMenu] = useState<Boolean>(true)

  function handlePesq(event: React.ChangeEvent<HTMLInputElement>) {
    setPesquisa(event.target.value);
  }

  const pesquisar = () => {
    setDestaque(false);
    if (pesquisa != undefined && pesquisa.length > 0) {
      setPesquisavel(true);
    } else {
      setDestaque(true);
    }
  };

  function retorno() {
    if (!destaque && !pesquisavel) {
      return <div>Nada encontrado.</div>;
    }
  }

  function Pagina(id: number) {
    setIdpagina(id);
  }

  useEffect(() => {
    axios.get("https://localhost:44378/api/Receitas").then((response) => {
      setDado(response.data);
    });
  }, []);

  return (
    <section className="inicial">
      <div className="inicialPesquisa">
        <input
          type="text"
          name=""
          id=""
          onChange={handlePesq}
          value={pesquisa}
        />
        <img src={lupa} alt="" onClick={pesquisar} />
      </div>
      <aside>
        <ul className="menu">
          <div className="btnMenu" onClick={()=>{menu?setMenu(false):setMenu(true)}}>X</div>
          <Link to={`/paginaDestino?tipo=bolo`}><li className={menu?'visibilidade':''}>Bolo</li></Link>
          <Link to={`/paginaDestino?tipo=torta`}><li className={menu?'visibilidade':''}>Torta</li></Link>
          <Link to={`/paginaDestino?tipo=lanche`}><li className={menu?'visibilidade':''}>Lanche</li></Link>
          <Link to={`/paginaDestino?tipo=salada`}><li className={menu?'visibilidade':''}>Salada</li></Link>
          
        </ul>
      </aside>
      <div className="linha"></div>
      <section className="destaques">
        {destaque ? (
          dado.map((a: receita) => (
            <div className="destaqueCard" key={a.receitaId}>
              <div className="destaqueImg">
                <img src={pao} alt="" />
              </div>
              <div className="destaqueTexto">
                <h2>{a.receitaName}</h2>
                <p>{a.instrucao}</p>
                <button onClick={() => Pagina(a.receitaId)}>Acessar</button>
                <Link to={`/paginareceita?id=${a.receitaId}`}>
                  <button>Acessar</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p> </p>
        )}
        {pesquisavel ? (
          dado.map((a: receita) =>
            a.receitaName.toLowerCase() == pesquisa?.toLowerCase() ? (
              <div className="destaqueCard" key={a.receitaId}>
                <div className="destaqueImg">
                  <img src={pao} alt="" />
                </div>
                <div className="destaqueTexto">
                  <h2>{a.receitaName}</h2>
                  <p>{a.instrucao}</p>
                  <Link to={`/paginareceita?id=${a.receitaId}`}>
                  <button>Acessar</button>
                </Link>
                </div>
              </div>
            ) : (
              <p></p>
            )
          )
        ) : (
          <p></p>
        )}
      </section>
      {retorno()}
    </section>
  );
};
