import  "./projetos.css"
import {AiOutlineArrowUp} from "react-icons/ai"
import avatar from "../../images/avatar.png"
import gitHub from "../../images/apiGithub.png"
import jogodaMemoria from "../../images/jogoDaMemoria.png"

import { useState } from "react"

 
 function Projetos(){

    const [projetos,setProjetos] =useState([{
        image:avatar,
        title:"Prime-Flix",
        description: "Projeto em ReactJs que consome a API do TMDB e exibe os 10 primeiros filmes em cartaz.",
        linkGithub:"https://github.com/LucianoCarvalho0106/primeflix",
        linkProjeto:"https://primeflix-luciano.netlify.app"
    },
    {
        image: gitHub,
        title: "Api GitHub",
        description:"Projeto que busca informações de usuarios do Github",
        linkGithub:"https://github.com/LucianoCarvalho0106/github-api",
        linkProjeto:"https://api-githubluciano.netlify.app"
    },
    {
        image: jogodaMemoria,
        title: "Jogo Da Memória",
        description:"Jogo da Memória desenvolvido em HTML, CSS e Javascript",
        linkGithub:"https://github.com/LucianoCarvalho0106/jogo-da-memoria",
        linkProjeto:"https://lucianocarvalho0106.github.io/jogo-da-memoria/"
    }
])

    return(
        <section id="projetos">
            <div className="text-projeto">
                <h1>Projetos</h1>
                <p>Alguns Dos Projetos Desenvolvidos até Agora</p>
            </div>
        {
            projetos.map(projeto=>{
                return(
            <div className="container-cards" key={projeto.title}>
                <div className="card">
                    <div className='img'>
                        <img src={projeto.image}></img>
                    </div>
                    <div className='content'>
                        <span className='title'>
                        {projeto.title}
                        </span>
                        <p className="desc">{projeto.description}</p> <br></br>

                        <a className="links" href={projeto.linkProjeto}>Ver projeto</a>  <a className="links" href={projeto.linkGithub}>Código</a>
                    </div>
                    <div className="arrow">
                        <span><AiOutlineArrowUp></AiOutlineArrowUp></span>
                    </div>
                
                </div>
            </div>
        
                )
            })  
        }
        
    </section>
    )
}

export default Projetos