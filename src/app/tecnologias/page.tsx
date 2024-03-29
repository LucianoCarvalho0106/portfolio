import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tecnologia from "@/components/Tecnologia";
import { FaHtml5,FaCss3Alt,FaReact,FaGitAlt,FaNodeJs,FaDocker  } from "react-icons/fa";
import { IoLogoJavascript,IoLogoFirebase  } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress,SiMongodb  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


export default function App () {
  return (
    <div>
      <Header></Header>
      <div>
        <h2 className="text-center text-2xl text-[#2C444E]">Tecnologias</h2>
        
        <div className="flex flex-wrap gap-4 justify-center mt-12 w-9/12 mx-auto">
            <Tecnologia icone={<FaHtml5 size={100}></FaHtml5>} cor="#df4e00" nome="HTML"></Tecnologia>
            <Tecnologia icone={<FaCss3Alt size={100}></FaCss3Alt>} cor="#1579b8" nome="CSS"></Tecnologia>
            <Tecnologia icone={<IoLogoJavascript size={100}></IoLogoJavascript>} cor="#f7cf00" nome="JavaScript"></Tecnologia>
            <Tecnologia icone={<FaReact size={100}></FaReact>} cor="#1579b8" nome="ReactJS"></Tecnologia>
            <Tecnologia icone={<TbBrandNextjs size={100}></TbBrandNextjs>} cor="#000000" nome="NextJs"></Tecnologia>
            <Tecnologia icone={<IoLogoFirebase size={100}></IoLogoFirebase>} cor="#f7c630" nome="Firebase"></Tecnologia>
            <Tecnologia icone={<FaGitAlt  size={100}></FaGitAlt>} cor="#e94e31" nome="Git"></Tecnologia>
            <Tecnologia icone={<FaNodeJs  size={100}></FaNodeJs>} cor="#509941" nome="NodeJS"></Tecnologia>
            <Tecnologia icone={<SiExpress  size={100}></SiExpress>} cor="#0000000" nome="Express"></Tecnologia>
            <Tecnologia icone={<SiMongodb   size={100}></SiMongodb >} cor="#509941" nome="NodeJS"></Tecnologia>
            <Tecnologia icone={<BiLogoPostgresql  size={100}></BiLogoPostgresql>} cor="#31648c" nome="PostgreSQL"></Tecnologia>
            <Tecnologia icone={<FaDocker  size={100}></FaDocker>} cor="#268fe0" nome="Docker"></Tecnologia>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
