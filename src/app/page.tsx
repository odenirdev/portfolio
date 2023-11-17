import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main>
      <article className="bg-[url('/img/bg-spotlight.svg')] bg-no-repeat bg-right-bottom bg-contain">
        <section className="max-w-[75rem] mx-auto min-h-[calc(100vh-6.875rem)] flex justify-center flex-col gap-12">
          <header className="uppercase flex flex-col gap-3">
            <span className="text-4xl font-semibold">Olá, eu sou</span>
            <h1 className="text-brand text-7xl font-bold">Odenir Gomes</h1>
            <span className="text-4xl font-semibold">Software Developer</span>
          </header>

          <footer className="flex gap-4 mb-8">
            <button className="border-4 border-[#10D7E2] px-8 py-3 rounded flex gap-2 items-center"><LinkedinLogo size={20}/> Linkedin</button>

            <button className="border-4 border-[#6518B4] px-8 py-3 rounded flex gap-2 items-center"><GithubLogo size={20}/>Github</button>
          </footer>
        </section>
      </article>
    </main>
  )
}