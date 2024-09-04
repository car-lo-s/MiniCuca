import './style.css'
import logo from './assets/logotipo.jpeg'
// import { PaginaReceita } from './paginaReceita';
import { Inicial } from './inicial';
import { Route, Routes } from 'react-router-dom';
// import { Login } from './login';
import { PaginaReceita } from './paginaReceita';
import { PaginaDestino } from './paginaDestino';
// import { Login } from './login';

function App() {
  return <section>
    <header>
      <div>
        <img src={logo} alt="" />
        <h1>MiniCuca</h1>
      </div>
    </header>
    <Routes>
      <Route path='/' element={ <Inicial/> } />
      <Route path='/paginareceita' element={ <PaginaReceita/> }/>
      <Route path='/paginadestino' element={ <PaginaDestino/> }/>
    </Routes>
    <footer>
      <p>Carlos Teste</p>
    </footer>
  </section>;
}

export default App;
