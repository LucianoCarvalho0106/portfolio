import { useState,useEffect } from "react"
import {AiFillLinkedin,AiFillGithub,AiOutlineMenu} from "react-icons/ai"
import "./navbar.css"


function Navbar(){
    const [ativo,setAtivo] = useState(false)
    
   
    function clickBtn(e){
        
        if(ativo === "ativo"){
         setAtivo(false)
        console.log("desativado")
        return
        }else{
           setAtivo(true)
        console.log("ativado")
        
        }
    }

    return(
        <header>
            
            <div className="social">
               <a target="blank" href="https://www.linkedin.com/in/luciano-carvalho0106/"><AiFillLinkedin  size={35}></AiFillLinkedin></a> 
                <a target="blank" href="https://github.com/LucianoCarvalho0106/Lucianocarvalho0106"><AiFillGithub  size={35}></AiFillGithub></a>
            </div>
            <nav className={ativo?"ativo": ""}>
                <button className={`menu ${ativo}`} onClick={clickBtn}>
                    <AiOutlineMenu size={25}></AiOutlineMenu>
                </button>
                <ul>
                    <a href="#home" onClick={()=>setAtivo(!ativo)}><li>Home</li></a>
                    <a href="#sobre" onClick={()=>setAtivo(!ativo)}><li>Sobre</li></a>
                    <a href="#tecnologias" onClick={()=>setAtivo(!ativo)}><li>Tecnologias</li></a> 
                    <a href="#projetos" onClick={()=>setAtivo(!ativo)}><li>Projetos</li></a>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Navbar