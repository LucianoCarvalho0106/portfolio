
import Header from "@/components/Header";
import Image from 'next/image';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-between h-full bg-lime-200">
        <main className='flex items-center justify-center gap-14'>
          <h1 className='text-center text-3xl'>
            <span className='text-[#01705F]'>Olá</span>, Prazer em te ver aqui ! <br />
            Venha conhecer um pouco <br /> sobre minha <span className='text-[#01705F]'>história e projetos</span>. 
          </h1>
          <Image src="/coding.png" alt='pessoa programando' width={350} height={350}></Image>
        </main>
      <Footer></Footer>
      </div>
      
    </>
  );
}
