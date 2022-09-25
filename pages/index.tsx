import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-8 sm:py-16 bg-slate-50 text-slate-700 font-light">
      <Head>
        <title>Alexandrea Suri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-1 px-8 sm:px-20 max-w-4xl">
        <h1 className="text-3xl text-cyan-500">
          Alexandrea Suri
        </h1>

        <p className="mt-4">
          I am a <span className="font-medium">Lead Software Engineer</span> with a deep understanding
          of <span className="font-medium">Front-End</span> architecture and passion for my
          team. I solve problems from a place of compassion – for the end user, for the planet, and for
          the on-call engineer. I am currently on family leave and looking for a role where I can learn from the best
          and use my skills to improve the lives of others.
        </p>

        <p className="mt-12">
          <span className="underline">Values</span> &rarr; Presence, Health & Wellness, Compassion
        </p>

        <p className="mt-3">
          <span className="underline">Languages</span> &rarr; Javascript ES6, Typescript, Elixir
        </p>

        <p className="mt-3">
          <span className="underline">Frameworks</span> &rarr; React, React Native, Next.js, Vue.js, Ember,
          Phoenix, LiveView
        </p>

        <p className="mt-3">
          <span className="underline">Technologies</span> &rarr; Node.js, RxJS, GraphQL, Alpine.js, Tailwind.css,
          LESS, SCSS, Styled Components, Gastby, Contentful, Ghost, Vercel, GitHub Actions, Docker, AWS, Heroku, Postgres
        </p>

        <div className="mt-12">
          <span className="underline">Projects</span>

          <p className="mt-3">
            <a href="https://www.radixdlt.com/post/radix-olympia-mainnet-is-here" target="_blank" className="text-blue-500 hover:text-blue-300 transition-colors">
              Radix Olympia Desktop Wallet
            </a> | <span className="font-medium">Tech Lead</span> | Vue.js 3 / Typescript / RxJS
          </p>

          <p className="mt-3">
            <a href="https://app.instapass.io/" target="_blank" className="text-blue-500 hover:text-blue-300 transition-colors">
              Radix Instapass
            </a> | <span className="font-medium">Tech Lead</span> | Vue.js 3 / Typescript
          </p>

          <p className="mt-3">
            <a href="https://heyfavor.com/blog" target="_blank" className="text-blue-500 hover:text-blue-300 transition-colors">
              Favor Blog
            </a> | <span className="font-medium">Tech Lead</span> | React 17 / Typescript / Gatsby / ContentfulCMS / GraphQL
          </p>

          <p className="mt-3">
            <a href="https://simplyqms.com/" target="_blank" className="text-blue-500 hover:text-blue-300 transition-colors">
              SimplyQMS
            </a> | <span className="font-medium">Tech Lead</span> | Vue.js / Cypress E2E
          </p>

          <p className="mt-3">
            <a href="https://alcorscientific.com/clinical-laboratory/miniised-2/" target="_blank" className="text-blue-500 hover:text-blue-300 transition-colors">
              Alcor MiniISED Hardware UI
            </a> | <span className="font-medium">Front-End Engineer</span> | Vue.js / Hardware Installation
          </p>
        </div>
      </main>

      <footer className="w-full flex-1 mt-14 px-20 max-w-4xl">
        <a
          className="text-sm text-cyan-500 hover:text-cyan-300 transition-colors mr-6"
          href="https://github.com/alexandreaco"
          target="_blank"
        >
          Github
        </a>

        <a
          className="text-sm text-cyan-500 hover:text-cyan-300 transition-colors mr-6"
          href="https://www.linkedin.com/in/alexandrea-suri-48838023/"
          target="_blank"
        >
          LinkedIn
        </a>

        <span
          className="text-sm text-cyan-500"
        >
          alexandreadef [at] gmail [dot] com
        </span>
      </footer>
    </div>
  )
}

export default Home
