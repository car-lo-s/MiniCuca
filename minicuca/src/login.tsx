import './style.css'
import pao from './assets/pao2.jpeg'
export const Login=()=>{
    
    return <section className="login">
        <section className='cadastrado'>
            <h1>Login</h1>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="senha">Senha:</label>
                <input type="password" name="" id="" />
            </div>
            <div>
                <button>Acessar</button>
            </div>
        </section>
        <div className='gpanimacao'>
        <img src={pao} alt="" className='loginanimacao'/>
        <img src={pao} alt="" className='loginanimacao'/>
        <img src={pao} alt="" className='loginanimacao'/>
        <img src={pao} alt="" className='loginanimacao'/>
        <img src={pao} alt="" className='loginanimacao'/>
        <img src={pao} alt="" className='loginanimacao'/>
        <img src={pao} alt="" className='loginanimacao'/>
        <img src={pao} alt="" className='loginanimacao'/>
        </div>
    </section>
}