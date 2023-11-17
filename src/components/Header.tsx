import React from 'react';

// import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between h-[6.875rem] max-w-[75rem] mx-auto'>
        <h1 className='text-2xl text-brand'>Portfolio</h1>

        <nav className='flex gap-16'>
          <a href="#" className="text-lg text-dark30">Home</a>

          <a href="#" className="text-lg text-dark30">Sobre mim</a>

          <a href="#" className="text-lg text-dark30">Experiência</a>

          <a href="#" className="text-lg text-dark30">Projetos</a>
        </nav>
    </header>
  )
}
