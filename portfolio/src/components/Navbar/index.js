import { useState } from "react"
import {AiFillLinkedin,AiFillGithub,AiOutlineMenu} from "react-icons/ai"
import "./navbar.css"
function Navbar(){
    const [ativo,setAtivo] = useState(false)

    function ativar(e){
        if(!ativo){
            
            e.target.classList.toggle("ativado")
            setAtivo(true)
            
        }else{
            e.target.classList.toggle("ativado")
            setAtivo(false)
        }
    }

    return(
        <header onClick={ativar}>
            <nav>
            <div className="social">
               <a target="blank" href="https://www.linkedin.com/in/luciano-carvalho0106/"><AiFillLinkedin color={"#666666"} size={35}></AiFillLinkedin></a> 
                <a target="blank" href="https://github.com/LucianoCarvalho0106/Lucianocarvalho0106"><AiFillGithub color={"#666666"} size={35}></AiFillGithub></a>
            </div>
            <button className="menu" >
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