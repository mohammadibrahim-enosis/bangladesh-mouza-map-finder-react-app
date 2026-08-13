'use client'

import Image from 'next/image'
import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import styles from './page.module.css'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.page}>
      <section className={styles.center}>
        <div className={styles.hero}>
          <Image src={heroImg} width={170} height={179} alt="" priority />
          <Image src={reactLogo} className={styles.framework} alt="React logo" />
        </div>

        <div>
          <h1>Bangladesh Mouza Map Finder</h1>
          <p>
            Edit <code>src/app/page.jsx</code> to start building with Next.js.
          </p>
        </div>

        <button
          type="button"
          className={styles.counter}
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          Count is {count}
        </button>
      </section>

      <section className={styles.nextSteps}>
        <article>
          <h2>Next.js Documentation</h2>
          <p>Learn routing, rendering, data fetching, and deployment.</p>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Explore Next.js
          </a>
        </article>

        <article>
          <h2>React Documentation</h2>
          <p>Learn components, state, effects, and reusable UI patterns.</p>
          <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
            Learn React
          </a>
        </article>
      </section>
    </main>
  )
}
