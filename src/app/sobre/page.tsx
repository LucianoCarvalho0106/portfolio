import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function App () {
  return (
    <>
        <Header></Header>
        <div className='flex flex-col justify-center h-screen -mt-[54px]'>
            <div className='flex justify-center items-center gap-40'>
                <Image src="/developer.png" width={320} height={320} alt='developer'></Image>
                <p className='text-[#2C444E] w-1/3 text-justify text-lg'>
                    Sou um estudante de Ciências da Computação e Desenvolvedor Fullstack. 
                    Moro em uma cidade no interior da Bahia, sou apaixonado por tecnologia e 
                    fascinado em como ela pode mudar a vida das pessoas, comecei 
                    a me aprofundar na programação há 2 anos  e desde lá sigo evoluindo diariamente 
                    através de cursos e projetos, é com muito esforço que procuro aperfeiçoar minhas habilidades, 
                    almejando sempre a excelência profissional.
                </p>
            </div>
            <Footer></Footer>
        </div>
        

    </>
  );
}
