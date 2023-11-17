import React from 'react'
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react/dist/ssr'

import { Button } from '@/components/Button'

export const Spotlight: React.FC = () => {
  return (
    <article className="bg-[url('/img/bg-spotlight.svg')] bg-no-repeat bg-right-bottom bg-contain px-4">
      <section className="max-w-[75rem] mx-auto min-h-[calc(100vh-6.875rem)] flex justify-center flex-col gap-12">
        <header className="uppercase flex flex-col gap-3">
          <span className="text-4xl font-semibold">Olá, eu sou</span>
          <h1 className="text-brand text-7xl font-bold">Odenir Gomes</h1>
          <span className="text-4xl font-semibold">Software Developer</span>
        </header>

        <footer className="flex flex-col gap-4 md:flex-row">
          <Button>
            <LinkedinLogo size={20} /> Linkedin
          </Button>

          <Button>
            <GithubLogo size={20} />
            Github
          </Button>
        </footer>
      </section>
    </article>
  )
}
