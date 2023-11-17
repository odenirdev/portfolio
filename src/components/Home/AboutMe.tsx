import { Download, Envelope, InstagramLogo, TwitchLogo, TwitterLogo } from '@phosphor-icons/react/dist/ssr'

import React from 'react'
import { Button } from '../Button'

import Image from 'next/image'

export const AboutMe = () => {
  return (
    <article className="bg-gray800 p-4">
      <div className="md:flex md:w-full md:max-w-[75rem] md:m-auto md:py-16">
        <section className="flex justify-center mb-6 md:mb-0 md:mr-10 md:items-center">
          <figure className="border-brand border-l-4 rounded w-full max-w-[22.5rem] md:w-[22.5rem] md:h-full">
            <Image
              src="https://github.com/odenirdev.png"
              alt=""
              className="w-full h-full md:object-cover"
              width={500}
              height={500}
            />
          </figure>
        </section>

        <section>
          <header className="mb-10">
            <h2 className="uppercase">Sobre mim</h2>
          </header>

          <section className="mb-10">
            <div className="flex flex-col gap-3 mb-10">
              <span className="text-xl font-medium">São Paulo, Brasil</span>

              <div>
                <p className="text-funcional-subtext leading-7 mb-4">
                  Olá, meu nome é Odenir Gomes. Prazer em te conhecer!
                </p>

                <p className="text-funcional-subtext leading-7 mb-4">
                  Compartilho conhecimento para construirmos um futuro melhor juntos.
                </p>

                <p className="text-funcional-subtext leading-7 mb-4">
                  Estudo programação desde 2017, me formei em Análise e Desenvolvimento de Sistemas pelo Instituto
                  Federal de São Paulo(IFSP), me considero um bom solucionador de problemas e tenho objetivo criar e
                  democratizar produtos/serviços por meio de tecnologia, impactando vidas e mudando o mundo.
                </p>
                <p className="text-funcional-subtext leading-7 mb-4">
                  Já atuei como professor de computação na ONG Ampliar.
                </p>

                <p className="text-funcional-subtext leading-7 mb-4">
                  Atualmente, sou desenvolver de software na Intuix Smart Certifications, startup especializada em
                  certificações empresariais.
                </p>

                <p className="text-funcional-subtext leading-7">
                  Sou idealizador da plataforma open-source de educação em tecnologia a Open-source Courses.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="" className="text-brand">
                <InstagramLogo size={24} />
              </a>

              <a href="" className="text-brand">
                <TwitchLogo size={24} />
              </a>

              <a href="" className="text-brand">
                <TwitterLogo size={24} />
              </a>
            </div>
          </section>

          <footer className="flex flex-col gap-4 md:flex-row">
            <Button>
              <Download size={20} /> Currículo
            </Button>

            <Button>
              <Envelope size={20} /> E-mail
            </Button>
          </footer>
        </section>
      </div>
    </article>
  )
}
