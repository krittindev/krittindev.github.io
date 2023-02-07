import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Wellcome To&nbsp;
          <code className={styles.code}>krittin.dev</code>
        </p>
        <div className="h-24 grid grid-cols-3 gap-4 content-evenly">
          <a
            href="https://www.facebook.com/suea.krittin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.svg"
              alt="Facebook Logo"
              className={styles.vercelLogo}
              width={24}
              height={24}
              priority
            />
          </a>
          <a
            href="https://www.instagram.com/k_suea/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram Logo"
              className={styles.vercelLogo}
              width={24}
              height={24}
              priority
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tuliptgr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              alt="Linked in Logo"
              className={styles.vercelLogo}
              width={24}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={180}
          height={180}
          priority
        />
        {/* <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div> */}
      </div>

      <div className={styles.grid}>
        <a
          href="https://krittin.dev/faaim"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Faaim <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Count Date with JS libs.
          </p>
        </a>

        <a
          href="https://krittin.dev/randominclass/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Random in Class <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Random Complex Sequence with JS libs.</p>
        </a>

        <a
          href="https://krittin.dev/24game/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            24 Game <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Random 24 Game Math Problem with Solution.
          </p>
        </a>
      </div>
    </main>
  )
}
