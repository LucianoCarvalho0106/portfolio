import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex gap-8 justify-center mt-16 items-center'>
        <Link href="/" className='flex gap-6 items-center bg-[#2C444E] px-3 py-1 text-zinc-300 rounded '>Sobre Mim <Image src="/homework.png" alt='sobre mim' width={30} height={30}></Image></Link>

        <Link href="/" className='flex gap-6 items-center bg-[#2C444E] px-3 py-1 text-zinc-300 rounded '>Projetos <Image src="/homework.png" alt='sobre mim' width={30} height={30}></Image></Link>

        <Link href="/" className='flex gap-6 items-center bg-[#2C444E] px-3 py-1 text-zinc-300 rounded '>Tecnologias <Image src="/homework.png" alt='sobre mim' width={30} height={30}></Image></Link>

    </div>
  )
}

export default Footer