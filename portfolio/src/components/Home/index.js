import "./home.css"
import logo from "../../images/Logo_soluções_em_técnico_de_informática_azul_e_verde_água_-removebg-preview.png"
import person from "../../images/person.png"
import LucianoCurriculo from "./LucianoCurriculo.pdf"

export default function Home(){
    return(
        <section id="home" className="container">
           
            <div className="text">
            
                <h1>Olá<br></br>Seja Bem Vindo(a)<br></br> Meu Nome é Luciano <br></br>
                    Sou um Desenvolvedor de Software!
                </h1>
                 <a className="download" href={LucianoCurriculo} download>Baixar curriculo</a>
            </div>
            <div className="person">
                <img src={person}></img>
            </div>
        </section>
    )
}