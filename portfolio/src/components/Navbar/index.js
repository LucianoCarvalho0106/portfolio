import { useState } from "react"
import {AiFillLinkedin,AiFillGithub,AiOutlineMenu} from "react-icons/ai"
import "./navbar.css"
function Navbar(){
    const [ativo,setAtivo] = useState("")

    function clickBtn(e){
        
        if(ativo === "ativado"){
         setAtivo(e.target.classList.toggle(""))
        console.log("desativado")
        return
        }else{
           setAtivo(e.target.classList.toggle("ativado"))
        console.log("ativado")
        return
        }
    }

    return(
        <header>
            
            <div className="social">
               <a target="blank" href="https://www.linkedin.com/in/luciano-carvalho0106/"><AiFillLinkedin color={"#666666"} size={35}></AiFillLinkedin></a> 
                <a target="blank" href="https://github.com/LucianoCarvalho0106/Lucianocarvalho0106"><AiFillGithub color={"#666666"} size={35}></AiFillGithub></a>
            </div>
            <nav className={ativo.toString()}>
                <button className="menu" onClick={clickBtn}>
                    <AiOutlineMenu size={25} color={"#666666"}></AiOutlineMenu>
                </button>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Tecnologias</li>
                    <li>Projetos</li>
                </ul>
            </nav>
            
        
        </header>
    )
}

export default Navbar