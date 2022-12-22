import  "./projetos.css"
import avatar from "../../images/avatar.png"
 

 function Projetos(){
    return(
        <section id="projetos">
            <div>
                <h2>Projetos</h2>
                <p>Alguns Dos Projetos que fiz até Agora</p>
            </div>
            <div className="card">
                <img src={avatar} alt="prime-Flix"></img>
                <div className="cardText">
                    <h3>Prime-Flix</h3>
                    <p className="descricao">Projeto que exibe os 10 primeiros filmes em cartaz, utilizando a api do TMDB</p>
                    <p className="descricao">Tecnologias usadas: ReactJs</p>
                </div>
            </div>
        </section>
    )
}

export default Projetos