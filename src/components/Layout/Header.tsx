'use client'

import React from 'react'

import { List } from '@phosphor-icons/react/dist/ssr'

// import { Container } from './styles';

export const Header: React.FC = () => {
  const [show, setShow] = React.useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <header className="flex items-center justify-between h-[6.875rem] max-w-[75rem] mx-auto px-4 relative">
      <h1 className="text-2xl text-brand">Portfolio</h1>

      <button className="md:hidden" type="button" onClick={handleShow}>
        <List size={44} />
      </button>

      <nav
        className="data-[show=true]:block hidden absolute left-0 top-[6.875rem] w-full px-4 md:static md:block md:w-fit"
        data-show={show}
      >
        <ul className="flex flex-col bg-[#252525] p-4 rounded md:bg-transparent md:flex-row">
          <li>
            <a href="#" className="text-lg text-gray50 px-3 py-2 block w-full">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-gray50 px-3 py-2 block w-full">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-gray50 px-3 py-2 block w-full">
              Experiência
            </a>
          </li>

          <li>
            <a href="#" className="text-lg text-gray50 px-3 py-2 block w-full">
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
