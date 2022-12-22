import "./tecnologias.css"
import {AiFillHtml5}from "react-icons/ai"
import {DiCss3,DiBootstrap,DiReact,DiGit}from "react-icons/di"
import {SiJavascript,SiNodedotjs,SiMongodb,SiPostgresql}from "react-icons/si"

export default function Tecnologias(){
    return(
        <section id="tecnologias" className="container">
            <div className="text">
                <h2>Tecnologias</h2>
                <p>Tecnologias que uso em meus projetos</p>
            </div>
            <div className="tecnologias">
                <div className="tech"><AiFillHtml5 size={100} color={"#FC490B"}></AiFillHtml5></div>
                <div className="tech"><DiCss3 size={100} color={"#29A3D7"}></DiCss3></div>
                <div className="tech"><SiJavascript size={90} color={"#CEB330"}></SiJavascript></div>
                <div className="tech"><DiBootstrap size={110} color={"#4B105B"}></DiBootstrap></div>
                <div className="tech"><DiReact size={110} color={"#5ED3F3"}></DiReact></div>

                <div className="tech"><SiNodedotjs size={100} color={"#7CB700"}></SiNodedotjs></div>
                <div className="tech"><SiMongodb size={100} color={"#429432"}></SiMongodb></div>
                <div className="tech"><SiPostgresql size={100} color={"#2F5E8D"}></SiPostgresql></div>
                <div className="tech"><DiGit size={100} color={"#E94E31"}></DiGit></div>
                
            </div>
           
        </section>
    )
}