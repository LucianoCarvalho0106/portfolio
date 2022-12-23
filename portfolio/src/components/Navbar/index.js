import { useState } from "react"
import {AiFillLinkedin,AiFillGithub,AiOutlineMenu} from "react-icons/ai"
import "./navbar.css"
function Navbar(){
    const [ativo,setAtivo] = useState(false)

    function clickBtn(e){
        
        if(ativo === "ativado"){
         setAtivo(e.target.classList.toggle(false))
        console.log("desativado")
        return
        }else{
           setAtivo(e.target.classList.toggle(true))
        console.log("ativado")
        return
        }
    }

    return(
        <header>
            
            <div className="social">
               <a target="blank" href="https://www.linkedin.com/in/luciano-carvalho0106/"><AiFillLinkedin color={"#d6d6d6"} size={35}></AiFillLinkedin></a> 
                <a target="blank" href="https://github.com/LucianoCarvalho0106/Lucianocarvalho0106"><AiFillGithub color={"#d6d6d6"} size={35}></AiFillGithub></a>
            </div>
            <nav className={ativo?"ativo":""}>
                <button className="menu" onClick={clickBtn}>
                    <AiOutlineMenu size={25} color={"#d6d6d6"}></AiOutlineMenu>
                </button>
                <ul>
                    <a href="#home"><li>Home</li></a>
                    <a href="#sobre"><li>Sobre</li></a>
                    <a href="#tecnologias"><li>Tecnologias</li></a> 
                    <a href="#projetos"><li>Projetos</li></a>
                </ul>
            </nav>
            
        
        </header>
    )
}

export default Navbar